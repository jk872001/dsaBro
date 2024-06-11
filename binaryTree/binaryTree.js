class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key){
    this.root=this.deleteNode(this.root,key)
  }

  deleteNode(node,key){
    if(node === null){
        return null
    }
    if(key < node.key){
        node.left = this.deleteNode(node.left,key)
    }else if(key > node.key){
        node.right = this.deleteNode(node.right,key)
    }else{
        if(node.left === null && node.right === null){
            return null
        }else if(node.left === null){
            return node.right
        }else if(node.right === null){
            return node.left
        }else{
            let tempNode = this.findMinNode(node.right)
            node.key = tempNode.key
            node.right = this.deleteNode(node.right,tempNode.key)
        }
    }
    return node
  }

  findMinNode(node){
    while(node.left !== null){
        node = node.left
    }
    return node
  }
   depthFirstTraversal = (root) => {
    if (root === null) {
      return // return a message or empty
    }
    const values = []
    const stack = [ root ]
  
    while(stack.length > 0){
      const node = stack.pop()
      values.push(node.key)
  
      if (node.right !== null) {
        stack.push(node.right)
      }
      if (node.left !== null) {
        stack.push(node.left)
      }
    }
    return values;
  }
}

let binary = new BinarySearchTree()
binary.insert(5)
binary.insert(3)
binary.insert(8)
binary.insert(2)
binary.insert(4)
binary.insert(7)
binary.insert(10)
binary.delete(5)
binary.delete(5)

console.log(JSON.stringify(binary))