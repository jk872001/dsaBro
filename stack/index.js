class Stack {
  constructor() {
    this.stack = []
  }

  push(ele){
    this.stack.push(ele)
  }

  pop(){
    this.stack.pop()
  }

  peak(){
    return this.isEmpty() ? "stack is empty" : this.stack[this.stack.length-1]
  }

  isEmpty(){
    return this.stack.length === 0
  }

  size(){
    return this.stack.length
  }

  clear(){
    return this.stack = []
  }

  contains(ele){
    return this.stack.includes(ele)
  }

  reverse(ele){
    return this.stack.reverse()
  }

  printStack(){
    let str = ""
    for (let i = 0; i < this.stack.length; i++) {
        str += this.stack[i] + "\n"
    }
    console.log(str)
  }
}

let myStack = new Stack()
myStack.push(3)
myStack.push(2)
myStack.push(7)
myStack.push(5)
myStack.pop()
// myStack.clear()
// myStack.reverse()
myStack.printStack()

console.log(myStack);
console.log(myStack.peak())
console.log(myStack.isEmpty())
console.log(myStack.size())
console.log(myStack.contains(2))
console.log(myStack.contains(8))
