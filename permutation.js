const Queue = require('./randomizedQueue.js')

module.exports = function Permutation(num) {
  const stringQueue = new Queue()
  return (arr) => {
    // how to add the chars of string to queue?
    for (var i = 0; i < arr.length; i++) {
      stringQueue.enqueue(arr[i])
    }
    for (var j = num; j > 0; j--) {
      console.log(stringQueue.sample())
    }
  }
}