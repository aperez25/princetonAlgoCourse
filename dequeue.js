class Node {
  constructor(item) {
    this.value = item
    this.next = null
    this.prev = null
  }
}

class Dequeue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  isEmpty() {
    return !this.length
  }

  size() {
    return this.length
  }

  addFirst(item) {
    if (!item) throw new Error(`Adding a null item isn't allowed`)
    const curFirst = this.first
    const node = new Node(item)
    if (this.isEmpty()) {
      this.first = node
      this.last = node
    } else {
      this.first = node
      node.next = curFirst
      curFirst.prev = this.first
    }
    this.length++
  }

  addLast(item) {
    if (!item) throw new Error('Please input a valid item')
    const curLast = this.last
    const node = new Node(item)
    if (this.isEmpty()) {
      this.last = node
      this.first = node
    } else {
      this.last = node
      curLast.next = this.last
      this.last.prev = curLast
    }
    this.length++
  }

  removeFirst() {
    if (this.isEmpty()) throw new Error('Queue is empty')
    const removed = this.first
    this.first = removed.next
    this.length--
    return removed.value
  }

  removeLast() {
    const removed = this.last
    if (!removed) throw new Error('Queue is empty')
    this.last = removed.prev
    this.last.next = null;
    this.length--
    return removed.value
  }

}

function Iterator(queue) {
  let current = queue.first
  return {
    remove: () => {
      throw new Error('Cannot remove items in the iterator!')
    },
    next: () => {
      if (current === null) throw new Error('There are no more items to return')
      const item = current.value
      current = current.next
      return item;
    },
    hasNext: () => current != null,
  }
}

module.exports = { Dequeue, Iterator }
