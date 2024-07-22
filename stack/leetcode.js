// implemet stack using 2 queues
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(x) {
        this.queue.push(x);
    }

    dequeue() {
        return this.queue.shift();
    }

    top() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(x) {
        this.q2.enqueue(x);
        while (!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    pop() {
        if (!this.q1.isEmpty()) {
            return this.q1.dequeue();
        } else {
            return null;
        }
    }

    top() {
        if (!this.q1.isEmpty()) {
            return this.q1.top();
        } else {
            return null;
        }
    }

    size() {
        return this.q1.size();
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.q1.size(); i++) {
            str += this.q1.queue[i] + "\n";
        }
        return str;
    }
}

let stack = new Stack();
stack.push(2);
stack.push(4);
// console.log(stack.top()); // Should print 4
// console.log(stack.pop()); // Should print 4
// console.log(stack.top()); // Should print 2
stack.push(6);
console.log(stack.printStack()); // Should print 6 and 2 in separate lines
