const testFuncs = require('../src/649.dota2-senate.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('RD')).toEqual('Radiant')
    })
    it('case 2', () => {
        expect(testFunc('RDD')).toEqual('Dire')
    })
})
