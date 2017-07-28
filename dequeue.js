/* Dequeue:  Create a generic data type Deque that implements the following API:

public class Deque<Item> implements Iterable<Item> {
   public Deque()                           // construct an empty deque
   public boolean isEmpty()                 // is the deque empty?
   public int size()                        // return the number of items on the deque
   public void addFirst(Item item)          // add the item to the front
   public void addLast(Item item)           // add the item to the end
   public Item removeFirst()                // remove and return the item from the front
   public Item removeLast()                 // remove and return the item from the end
   public Iterator<Item> iterator()         // return an iterator over items in order from front to end
   public static void main(String[] args)   // unit testing (optional)
}
Corner cases. Throw a java.lang.IllegalArgumentException if the client attempts to add a null item; throw a java.util.NoSuchElementException if the client attempts to remove an item from an empty deque; throw a java.lang.UnsupportedOperationException if the client calls the remove() method in the iterator; throw a java.util.NoSuchElementException if the client calls the next() method in the iterator and there are no more items to return.

Performance requirements.   Your deque implementation must support each deque operation (including construction) in constant worst-case time. A deque containing n items must use at most 48n + 192 bytes of memory and use space proportional to the number of items currently in the deque. Additionally, your iterator implementation must support each operation (including construction) in constant worst-case time.
*/

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
    this.first.prev = null;
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
