class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
}

Linkedlist.prototype.insertAtStart = function (data) {
  let newNode = new Node(data);
  this.head = newNode;
};

Linkedlist.prototype.insertAtLast = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

Linkedlist.prototype.insertAtGivenPoint = function (data,prevNode) {
  const newNode = new Node(data,prevNode.next);
  prevNode.next=newNode
};

// delete the first node
Linkedlist.prototype.deleteFirstNode = function () {
    if(!this.head){
       console.log("empty list")
       return
    }
     this.head = this.head.next
  };

// delete the last node (second last)
Linkedlist.prototype.deleteLastNode = function () {
    if(!this.head){
       console.log("empty list")
       return
    }
    if(!this.head.next)
    {
        this.head = null
        return
    }
    let secondLast= this.head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }
    secondLast.next = null
     
  };

  // delete by key
Linkedlist.prototype.deleteByKey = function (key) {
    if(!this.head){
       console.log("empty list")
       return
    }
    if(this.head.data === key){
       this.head= this.head.next
       return
    }
     let current = this.head
     while(current.next){
        if(current.next.data === key){
          current.next = current.next.next
          return
        }
       current = current.next
     }
     
  };

//   search operation 
Linkedlist.prototype.search = function(key){
    let current=this.head
    while(current){
        if(current.data === key) return true
        current = current.next
    }
    return false
}

// reverse
Linkedlist.prototype.reverse=function(){
    let curr=this.head
    let next= null
    let prev=null
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

Linkedlist.prototype.traverse = function () {
  let list = [];
  let current = this.head;
  while (current) {
    list.push(current.data);
    current = current.next;
  }
  console.log(list);
};

const link = new Linkedlist();

link.insertAtStart(5);
link.insertAtLast(9);
link.insertAtLast(0);
// link.deleteFirstNode()
// link.deleteLastNode()
// link.deleteByKey(9)
// console.log(link.search(8))
// link.reverse()

link.traverse();

