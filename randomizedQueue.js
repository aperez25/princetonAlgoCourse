module.exports = class RandomizedQueue {
  constructor() {
    this.queue = []
    this.counter = 0
  }
  isEmpty() {
    return this.counter === 0
  }
  size() {
    return this.counter
  }
  enqueue(item) {
    if (!item) throw new Error('Whoops! Looks like this item is null, please enter a valid item type.')
    this.queue.push(item)
    this.counter++
  }
  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty!')
    const deletedItem = this.queue[Math.floor(Math.random() * this.counter)]
    const lastIndex = this.counter - 1
    const deletedIndex = this.queue.indexOf(deletedItem)
    this.queue[deletedIndex] = this.queue[lastIndex]
    this.queue[lastIndex] = deletedItem
    this.counter--
    return this.queue.pop();
  }
  sample() {
    if (this.isEmpty()) throw new Error('Queue is empty!')
    return this.queue[Math.floor(Math.random() * this.counter)]
  }

}

function Iterator(object) {
  const copy = object.queue.slice()
  return {
    remove: () => {
      throw new Error('Cannot remove items in the iterator!')
    },
    next: () => {
      if (copy.length === 0) throw new Error('There are no more items to return')
      const deletedItem = copy[Math.floor(Math.random() * copy.length)]
      const lastIndex = copy.length - 1
      const deletedIndex = copy.indexOf(deletedItem)
      copy[deletedIndex] = copy[lastIndex]
      copy[lastIndex] = deletedItem
      return copy.pop();
    },
    hasNext: () => copy.length !== 0,
  }
}
