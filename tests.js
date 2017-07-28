const dequeue = require('./dequeue.js')

/* DEQUEUE TESTING */
const data = new dequeue.Dequeue();
// adds and removes items to front and back of queue
data.addFirst(5);
console.log(data.removeFirst());
data.addFirst(10);
data.addLast(13);
console.log(data.removeFirst()); // 10

// returns size of queue and whether it's empty
console.log(data.size() === 2); // true
data.addLast(27);
console.log(data.removeLast()); // 27
data.addFirst(9);
data.addFirst(30);
console.log(data.size() === 5); // false, size = 4
data.addLast(12);
console.log(data.isEmpty()); // false

// Iterator class iterates through items until null value
const items = new dequeue.Iterator(data)
while (items.hasNext()) {
  console.log(items.next())
}
// 30 9 5 13 12
