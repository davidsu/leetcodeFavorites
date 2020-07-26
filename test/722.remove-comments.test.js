const testFuncs = require('../src/722.remove-comments.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const src = [
      '/*Test program */',
      'int main()',
      '{ ',
      '  // variable declaration ',
      'int a, b, c;',
      '/* This is a test',
      '   multiline  ',
      '   comment for ',
      '   testing */',
      'a = b + c;', '}']
    const expected = ['int main()', '{ ', '  ', 'int a, b, c;', 'a = b + c;', '}']
    expect(testFunc(src)).toEqual(expected)
  })
  it('case 2', () => {
    const src = ['struct Node{', '    /*/ declare members;/**/', '    int size;', '    /**/int val;', '};']
    const expected = ['struct Node{', '    ', '    int size;', '    int val;', '};']
    expect(testFunc(src)).toEqual(expected)
  })
  it('case 3', () => {
    const src = ['a//*b//*c', 'blank', 'd//*e/*/f']
    expect(testFunc(src)).toEqual(['a', 'blank', 'd'])
  })
})
