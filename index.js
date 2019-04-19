#!/usr/bin/env node
const Plugin = require('./node_modules/leetcode-cli/lib/plugin')
const cli = require('./node_modules/leetcode-cli/lib/cli')
const core = require('./node_modules/leetcode-cli/lib/core')

function getNewProblem(error, problems, problem) {
    if(!problems) {
        return core.filterProblems({query: 'D'}, getNewProblem) 
    }
    if(!problem || problem.likes < problem.dislikes) {
        problem = problems[Math.floor(Math.random() * problems.length -1)]
        return core.getProblem(problem.id, (e, problem) => getNewProblem(e, problems, problem))
    }
    if(error)
        throw error
    else {
        if(problem.dislikes > problem.likes) {
            return getNewProblem()
        }
        require('child_process').execSync(`open ${problem.link}`)

    }
}
function getProblemFromReviewList() {
    Plugin.plugins[2].getFavorites((_, {favorites}) => {
        const questions = favorites.private_favorites.find(f => f.name == 'review').questions
        const problem = questions[Math.floor(Math.random() * questions.length)]
        core.getProblem(problem.id, (e, problem) => {
            require('child_process').execSync(`open ${problem.link}`)
        })
    })
}

cli.run()

// getNewProblem()
// getProblemFromReviewList()
if(Math.floor(Math.random() * 6) == 1) {
    getNewProblem()
} else {
    getProblemFromReviewList()
}

