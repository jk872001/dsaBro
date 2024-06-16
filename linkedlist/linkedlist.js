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

Linkedlist.prototype.insertAtBegining = function (data) {
  let newNode = new Node(data, this.head);
  this.head = newNode;
  return newNode
};

Linkedlist.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

Linkedlist.prototype.insertAtGivenPoint = function(prevNode,data){
  let newNode = new Node(data,prevNode.next)
  prevNode.next = newNode
}

Linkedlist.prototype.deleteFirstNode= function(){
    if(!this.head) return "Empty"
    this.head = this.head.next
}

Linkedlist.prototype.deleteLastNode= function(){
    if(!this.head) return "Empty"
    if(!this.head.next){
      this.head = null
      return 
    }
    let secondlast = this.head
    while(secondlast.next.next){
      secondlast = secondlast.next
    }
    secondlast.next = null
}

Linkedlist.prototype.deleteByKey = function(key){
   if(!this.head) return "Empty"
   if(this.head.data === key){
    this.head = this.head.next
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
}

Linkedlist.prototype.search = function(key){
   let current = this.head
   while(current){
    if(current.data === key) return true
    current = current.next
   }
   return false
}

Linkedlist.prototype.traverse = function(){
  let current = this.head
  let result = []
   while(current){
    result.push(current.data)
    current = current.next
   }
   return result
}

Linkedlist.prototype.reverse= function(){
  let curr = this.head
  let prev = null
  let next = null
  while(curr){
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  this.head = prev
}



let link = new Linkedlist();
let firstNode = link.insertAtBegining(1);
let secondNode = link.insertAtBegining(2);
link.insertAtEnd(4);
link.insertAtGivenPoint(secondNode,3)
link.deleteFirstNode()
link.deleteLastNode()
link.insertAtEnd(4);
link.deleteByKey(1);
link.insertAtEnd(8);
// link.reverse()
console.log(JSON.stringify(link));
// console.log(link.search(4))
// console.log(link.search(5))
// console.log(link.traverse())
