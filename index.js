#!/usr/bin/env node
const Plugin = require('./node_modules/leetcode-cli/lib/plugin')
const cli = require('./node_modules/leetcode-cli/lib/cli')
const core = require('./node_modules/leetcode-cli/lib/core')
const cp = require('child_process')

function sortProblemByLike(error, problems, problem) {
    if(!problems) {
        return new Promise(r => {
            core.filterProblems({query: 'D'}, (a,b,c) => {
                r(sortProblemByLike(a,b,c))
            })
        })
    }
    const problemsLikes = []
    let prom = Promise.resolve()
    for(let p of problems) {
        // core.getProblem(p.id, () => {})
        prom = prom.then(() => new Promise(r => {
            core.getProblem(p.id, (e, problem) => {
                if(!e) {
                    let {likes, dislikes, link} = problem
                    problemsLikes.push({likes, dislikes, link})
                }
                r()
            })
        })).catch()
    }
    debugger
    return prom.then( () => {
        const res = problemsLikes.sort((a, b) => b.likes - a.likes)
        return problemsLikes
    })
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

const getRandom = () => {
    return sortProblemByLike().then(p => {
        const idx = Math.floor(Math.random() * 20)
        cp.execSync(`open ${p[idx].link}`)
        return p
    })
}
if(process.argv.length > 2) {
    getRandom().then(p => p.forEach(p =>console.log(JSON.stringify(p))))
} else if(Math.floor(Math.random() * 5) == 1) {
    console.log('getting random')
    getRandom()
} else {
    console.log('getting from list')
    getProblemFromReviewList()
}

