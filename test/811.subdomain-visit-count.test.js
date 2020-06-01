const testFuncs = require('../src/811.subdomain-visit-count.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const result = testFunc(['9001 discuss.leetcode.com'])
    const expected = ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com']
    expect(new Set(result)).toEqual(new Set(expected))
  })
  it('case 1', () => {
    const result = testFunc(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])
    const expected = ['901 mail.com', '50 yahoo.com', '900 google.mail.com', '5 wiki.org', '5 org', '1 intel.mail.com', '951 com']

    expect(new Set(result)).toEqual(new Set(expected))
  })
})
