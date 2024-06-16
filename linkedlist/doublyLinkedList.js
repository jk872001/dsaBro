class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedlist.prototype.insertAtBegining = function (data) {
    let newNode = new Node(data, this.head, null);

    if (this.head !== null) {
        this.head.prev = newNode;
    }
    this.head = newNode;
    // tail
    if (this.tail === null) {
        this.tail = newNode;
    }
    return newNode;
}

DoublyLinkedlist.prototype.insertAtEnd = function (data) {
    let newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    if (this.head === null) {
        this.head = newNode;
    }
    return newNode;
}

DoublyLinkedlist.prototype.insertAfter = function (data, prevNode) {
    if (prevNode === null) return "prevNode is empty";

    let newNode = new Node(data, prevNode.next, prevNode);
    if (prevNode.next !== null) {
        prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;
}

DoublyLinkedlist.prototype.deleteFirstNode = function () {
    if (!this.head) return "list is empty";
    if (this.head !== null) {
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null; // List is now empty
        }
    }
}

DoublyLinkedlist.prototype.deleteLastNode = function () {
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        if (this.tail !== null) {
            this.tail.next = null;
        } else {
            this.head = null; // List is now empty
        }
    }
}

DoublyLinkedlist.prototype.reverse = function () {
    let curr = this.head;
    let temp = null;
    while (curr) {
        // swapping
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        // move
        curr = curr.prev;
    }
    if (temp !== null) {
        this.tail = this.head;
        this.head = temp.prev;
    }
}

let doubleLink = new DoublyLinkedlist();
let firstNode = doubleLink.insertAtBegining(1);
let secondNode = doubleLink.insertAtEnd(3);
doubleLink.insertAfter(2, firstNode);
// doubleLink.deleteFirstNode();
// doubleLink.deleteLastNode();
doubleLink.reverse();
console.log(doubleLink);
