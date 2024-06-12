class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(ele) {
    this.queue.push(ele);
  }

  dequeue() {
    this.isEmpty() ? "Queue is empty" : this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peak() {
    return this.isEmpty() ? "Queue is empty" : this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  printQueue(){
    let str = ""
    for (let i = 0; i < this.queue.length; i++) {
        str += this.queue[i] + "\n"
    }
    return str;
  }
}

let myQueue = new Queue()
myQueue.enqueue(3)
myQueue.enqueue(7)
myQueue.enqueue(1)
myQueue.enqueue(5)
myQueue.dequeue()
// myQueue.clear()

console.log(myQueue)
console.log(myQueue.isEmpty())
console.log(myQueue.peak())
console.log(myQueue.size())
console.log(myQueue.printQueue())
