const testFuncs = require('../src/332.reconstruct-itinerary.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        const itinerary = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]
        expect(testFunc(itinerary)).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC'])
    })
    it('case 2', () => {
        const itinerary = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]
        expect(testFunc(itinerary)).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'])
    })
    it('case 3', () => {
        const itinerary = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'JFK']]
        expect(testFunc(itinerary)).toEqual(['JFK', 'SFO', 'JFK', 'ATL'])
    })
})
