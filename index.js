#!/usr/bin/env node
const Plugin = require('./node_modules/leetcode-cli/lib/plugin')
const cli = require('./node_modules/leetcode-cli/lib/cli')
const core = require('./node_modules/leetcode-cli/lib/core')
const cp = require('child_process')
const path = require('path')
const fs = require('fs')

function getAllProblems () {
    return new Promise((resolve, reject) => {
        core.filterProblems({ query: 'D' }, (error, problems) => {
            error ? reject(error) : resolve(problems)
        })
    })
}
async function sortProblemByLike () {
    const problems = await getAllProblems()
    const mapper = ({ id }) => new Promise(resolve => {
        core.getProblem(id, (e, problem) => {
            if (e) resolve() // probably locked problem, I don't care
            const { likes, dislikes, link, id, slug } = problem
            resolve({ likes, dislikes, link, id, slug })
        })
    })
    return (await Promise.allSettled(problems.map(mapper)))
        .filter(promise => !!promise.value)
        .map(promise => promise.value)
        .sort((a, b) => b.likes - a.likes)
}

function getProblemFromReviewList () {
    return new Promise(resolve => {
        Plugin.plugins[2].getFavorites((_, { favorites }) => {
            const questions = favorites.private_favorites.find(f => f.name === 'Favorite').questions
            const problem = questions[Math.floor(Math.random() * questions.length)]
            core.getProblem(problem.id, (e, problem) => {
                console.log(JSON.stringify(problem))
                resolve(problem)
            })
        })
    })
}

const testTemplate = testName => `
const {testFunc} = require('../src/${testName}.js')
describe('${testName}', () => {
    it('should ...', () => {
        expect(true).toBe(false)
    })
})
`

const fileName = ({ id, slug }) => `${id}.${slug}`

function generateTestIfNeeded ({ id, slug }) {
    if (!slug) console.log(JSON.stringify(arguments[0]))
    const testName = fileName({ id, slug })
    const testFileName = `${__dirname}/test/${testName}.test.js`
    if (!fs.existsSync(testFileName)) {
        fs.writeFileSync(testFileName, testTemplate(testName))
    }
}

function addExportToSrc ({ id, slug }) {
    const filePath = `${__dirname}/src/${fileName({ id, slug })}.js`
    fs.appendFileSync(filePath, '\nmodule.exports = {\n\ttestFunc: null\n}')
}

function showAndGenerateProblem ({ id, slug }) {
    const command = `${path.resolve(__dirname, 'node_modules/.bin/leetcode')} show ${id} -xg -o ${__dirname}/src -l javascript`
    cp.execSync(command, { stdio: [0, 1, 2] })
    generateTestIfNeeded({ id, slug })
    addExportToSrc({ id, slug })
}
async function getRandom () {
    const problems = await sortProblemByLike()
    const idx = Math.floor(Math.random() * 20)
    console.log(JSON.stringify(problems[idx]))
    return problems[idx]
}

if (process.argv.length > 3) { // delegate to leetcode-cli and exit
    cli.run()
} else {
    (async () => {
        cli.run()
        if (process.argv.length > 2) {
            sortProblemByLike().then(p => p.forEach(p => console.log(JSON.stringify(p))))
        } else if (Math.floor(Math.random() * 5) === 1) {
            console.log('getting random')
            showAndGenerateProblem(await getRandom())
        } else {
            console.log('getting from list')
            showAndGenerateProblem(await getProblemFromReviewList())
        }
    })()
}
