const singleNumber = nums => nums.reduce((res, curr) => curr ^ res, 0)

module.exports = {
    testFunc: singleNumber
}
