const testFuncs = require('../src/389.find-the-difference.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abcd', 'abcde')).toEqual('e')
  })
  it('case 2', () => {
    expect(testFunc('a', 'aa')).toEqual('a')
  })
  it('case 3', () => {
    expect(testFunc(
      'ihwrdisrhgxwbfevrxbtzgsywhnzleueadikniwyuasflpsviobwvsmydmyzppqjlmzakpbnouyttdigkcdzypvcqxbttmblttehgjlnpjwpzoprntifysfatjboasottnkpyyvmdcafpjicfpgmbwqdsaxdmmdmupnwhkpxixpdwmczntqtushemvavofszomtsrafzmxctpidjadwcwggdbyliqmcvuwscryfsvlvfrhfphmxvcnytbctomicwdwjjmdhmcqtnlqgixxdyjydhwnftkobotbhsgykawhtvnkxoykwkgvtqioqoiilergxlpuujabiug',
      'gyptmtjntxlusjhbzkbgowslthwtytdnflsyfsgfytzrodatykdyvgsmvxsuemijitvodmwrrqmcabhwzyoouorfckhisjpduoxvtmttzvwmicdxsovsabmpcpppzycuwbmpihmxadmvkkwerimhgwdwdtvqwbwtetppkpkbcaifuqbenagycdqatklciaczcpglxmvfaqnwpnssdmnhcmifeyndzttvypwlgpttvhswoiijybchbvzklgngqziyaczowgwiufqyhxxdqjrxolddgnmriijopdsikqwtyhplhubrljfjanexxyfvjmudxsomnfbafntpib'
    )).toEqual('z')
  })
})
