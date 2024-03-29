#!/usr/bin/env node
/* eslint-disable no-console */
const Plugin = require('./node_modules/leetcode-cli/lib/plugin')
const cli = require('./node_modules/leetcode-cli/lib/cli')
const core = require('./node_modules/leetcode-cli/lib/core')
const cp = require('child_process')
// const path = require('path')
const fs = require('fs')
const yargs = require('yargs')

function getAllProblems () {
  return new Promise((resolve, reject) => {
    core.filterProblems({ query: 'D' }, (error, problems) => {
      error ? reject(error) : resolve(problems)
    })
  })
}

function getDesiredDifficulty () {
  if (yargs.argv.e) return 'Easy'
  if (yargs.argv.m) return 'Medium'
  if (yargs.argv.h) return 'Hard'
}

function shouldUseProblemByDifficultyLevel (problem) {
  const level = getDesiredDifficulty()
  if (level) {
    return problem.level === level
  }
  return true
}

let solved
const getSolved = () => solved || (solved = new Set(fs.readdirSync('./src').map(fileName => Number(fileName.replace(/^(\d+).*/, '$1')))))
const filterOutSolvedProblems = ({ fid }) => !yargs.argv.noRepeat || !getSolved().has(fid)

async function sortProblemByLike () {
  const problems = await getAllProblems()
  const mapper = ({ fid }) =>
    new Promise((resolve) => {
      core.getProblem(fid, (e, problem) => {
        if (e) return resolve() // probably locked problem, I don't care
        const { likes, dislikes, link, id, fid, slug, level } = problem
        resolve({ likes, dislikes, link, id, fid, slug, level })
      })
    })
  return (await Promise.allSettled(problems.map(mapper)))
    .filter((promise) => !!promise.value)
    .map((promise) => promise.value)
    .filter(shouldUseProblemByDifficultyLevel)
    .filter(filterOutSolvedProblems)
    .sort((a, b) => b.likes - a.likes)
}

function getProblemFromReviewList () {
  return new Promise((resolve) => {
    Plugin.plugins[2].getFavorites((_, { favorites }) => {
      const questions = favorites.private_favorites.find((f) => f.name === 'Favorite').questions
      const problem = questions[Math.floor(Math.random() * questions.length)]
      core.getProblem(problem.fid, (e, problem) => {
        console.log(JSON.stringify({ problem }))
        resolve(problem)
      })
    })
  })
}

const testTemplate = (testName) =>
/* eslint-disable-next-line */
`const testFuncs = require('../src/${testName}.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc()).toEqual(false)
    })
})
`

const fileName = ({ fid, slug }) => `${fid}.${slug}`

function generateTestIfNeeded ({ fid, slug }) {
  const testName = fileName({ fid, slug })
  const testFileName = `${__dirname}/test/${testName}.test.js`
  if (!fs.existsSync(testFileName)) {
    fs.writeFileSync(testFileName, testTemplate(testName))
  }
}

function addExportToSrc ({ fid, slug }) {
  const filePath = `${__dirname}/src/${fileName({ fid, slug })}.js`
  fs.appendFileSync(filePath, '\nmodule.exports = {\n\ttestFunc: null\n}')
}

function showAndGenerateProblem ({ fid, slug, link }) {
  // constgit@gitlab.walkmernd.com:walkme/applications/black-site.git command = `${path.resolve(__dirname, 'node_modules/.bin/leetcode')} show ${fid} -xg -o ${__dirname}/src -l javascript`
  const command = `open ${link}`
  // console.log(command)
  cp.execSync(command, { stdio: [0, 1, 2] })
  generateTestIfNeeded({ fid, slug })
  addExportToSrc({ fid, slug })
}
const printProblems = (p) => p.forEach((p, i) => console.log(`${i}. `, JSON.stringify(p)))
async function getRandom () {
  const problems = (await sortProblemByLike()).filter(({ likes, dislikes }) => dislikes < likes * 3)
  if (!problems.length) {
    console.log('no more problems matching criteria')
    process.exit(0)
  }
  // printProblems(problems)
  const idx = Math.floor(Math.random() * Math.min(200, problems.length))
  return problems[idx]
}

if (!yargs.argv.h) {
  cli.run()
}

yargs // eslint-disable-line no-unused-expressions
  .command(
    '$0',
    'delegate to leetcode-cli',
    () => {},
    () => cli.run()
  )
  .command({
    command: 'select <keyword>',
    aliases: ['s'],
    desc: 'prepare for solving problem <keyword>',
    builder: (yargs) =>
      yargs.positional('keyword', {
        type: 'string',
        default: '',
        describe: 'Show question by name or id'
      }),
    handler: ({ keyword }) =>
      core.getProblems((e, problems) => {
        const p = problems.find((problem) => problem.name === keyword || problem.fid === keyword)
        showAndGenerateProblem(p)
      })
  })
  .command({
    command: 'random',
    aliases: ['r'],
    desc: 'select for you a random problem',
    handler: async () => showAndGenerateProblem(await getRandom())
  })
  .command({
    command: 'favorites',
    aliases: ['f'],
    desc: 'randomly select problem from review list',
    handler: async () => showAndGenerateProblem(await getProblemFromReviewList())
  })
  .command({
    command: 'list-by-like',
    aliases: ['l'],
    desc: 'list all problems sorted by like',
    handler: () => sortProblemByLike().then(printProblems)
  })
  .option('e', {
    alias: 'easy',
    default: false,
    describe: 'select only easy problems',
    type: 'boolean'
  })
  .option('m', {
    alias: 'medium',
    default: false,
    describe: 'select only medium problems',
    type: 'boolean'
  })
  .option('h', {
    alias: 'hard',
    default: false,
    describe: 'select only hard problems',
    type: 'boolean'
  })
  .option('no-repeat', {
    alias: 'n',
    default: true,
    describe: 'select only problems not previously solved',
    type: 'boolean'
  })
  .help('h')
  .alias('h', 'help').argv
