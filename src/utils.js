/* eslint-disable no-console */
const print2d = (arr, stringify = a => a) =>
  console.log(arr.reduce((res, a) => `${res}\n${a.map(stringify).join(', ')}`, ''))
module.exports = {
  print2d
}
