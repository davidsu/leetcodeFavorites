# LeetCode solutions &middot; ![Node.js CI](https://github.com/davidsu/leetcodeFavorites/workflows/Node.js%20CI/badge.svg?branch=master)

I'll be attempting to slowly add javascript solutions for [leetcode](https://leetcode.com/) in this repo.

I'll include tests (initially the examples from the problem description, additionally any testCase that I fail when trying to submit)

Included with this project a nice cli to raffle problems, giving preference to those that have highest user rating.

I'm using this as an excuse to play around with [Github Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions)

## USAGE 

first you'll need to let leetcode-cli create cache your usename/password: `yarn leetcode user -l`

will be slow on your first few usages since it will be downloading "stuff". Once things are cached it will get faster.

make sure to add things to your leetcode favorites as you see interesting questions you want to revisit and erase favorites once you master a given question.

every time you run this tool, a new file will be created in `./src/{filename}`. If given file already exists it will be overriden.

If a test file for it doesn't yet exist it will be created (in `./test/` folder). It is your mission to add tests to it as you see fit.

read the [leetcode-cli](https://github.com/skygragon/leetcode-cli) on how to test/submit.

### ENJOY.
