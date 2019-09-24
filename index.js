#!/usr/bin/env node
const Plugin = require('./node_modules/leetcode-cli/lib/plugin')
const cli = require('./node_modules/leetcode-cli/lib/cli')
const core = require('./node_modules/leetcode-cli/lib/core')
const pMap = require('p-map')
const cp = require('child_process')
const path = require('path')

function getAllProblems() {
    return new Promise((resolve, reject) => {
        core.filterProblems({query: 'D'}, (error, problems) => {
            error ? reject(error) : resolve(problems)
        })
    })

}
async function sortProblemByLike() {
    const problems = await getAllProblems()
    const mapper = ({id}) => new Promise(resolve => {
            core.getProblem(id, (e, problem) => {
                if(e) resolve() //probably locked problem, I don't care
                let {likes, dislikes, link, id} = problem
                resolve({likes, dislikes, link, id})
            })
        })
    return (await pMap(problems, mapper))
        .filter(problem => !!problem)
        .sort((a, b) => b.likes - a.likes)
}

function getProblemFromReviewList() {
    return new Promise(resolve => {
        Plugin.plugins[2].getFavorites((_, {favorites}) => {
            const questions = favorites.private_favorites.find(f => f.name == 'Favorite').questions
            const problem = questions[Math.floor(Math.random() * questions.length)]
            core.getProblem(problem.id, (e, problem) => {
                resolve(problem.id)
            })
        })
    })
}


function showAndGenerateProblem(id) {
    const command = `${path.resolve(__dirname, 'node_modules/.bin/leetcode')} show ${id} -g -o /tmp/leetcode -l javascript` 
    cp.execSync(command, {stdio: [0,1,2]})
}
async function getRandom() {
    const problems = await sortProblemByLike()
    const idx = Math.floor(Math.random() * 20)
    return problems[idx].id
}

if(process.argv.length > 3) { //delegate to leetcode-cli and exit
    cli.run()
    return
}
(async () => {
    cli.run()
    if(process.argv.length > 2) {
        sortProblemByLike().then(p => p.forEach(p =>console.log(JSON.stringify(p))))
    } else if(Math.floor(Math.random() * 5) == 1) {
        console.log('getting random')
        showAndGenerateProblem(await getRandom())
    } else {
        console.log('getting from list')
        showAndGenerateProblem(await getProblemFromReviewList())
    }
})()

