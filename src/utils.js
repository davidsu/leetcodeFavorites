/* eslint-disable no-console */
const print2d = arr => console.log(arr.reduce((res, a) => `${res}\n${a.join(', ')}`, ''))
module.exports = {
  print2d
}
