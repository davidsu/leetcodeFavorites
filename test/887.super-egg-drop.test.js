const testFuncs = require('../src/887.super-egg-drop.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1, 2)).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc(2, 6)).toEqual(3)
  })
  it('case 3', () => {
    expect(testFunc(3, 14)).toEqual(4)
  })
  it('case 4', () => {
    expect(testFunc(5, 1000)).toEqual(11)
  })
  it('case 5', () => {
    expect(testFunc(5, 100)).toEqual(7)
  })
  it('case 6', () => {
    expect(testFunc(7, 10000)).toEqual(15)
  })
})
