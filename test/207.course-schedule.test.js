const testFuncs = require('../src/207.course-schedule.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(2, [[1, 0]])).toEqual(true)
    })
    it('case 1', () => {
        expect(testFunc(2, [[1, 0], [0, 1]])).toEqual(false)
    })
})
