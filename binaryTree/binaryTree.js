class BSTNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new BSTNode(key);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }
      
    } else if (newNode.key > node.key) {
      if (!node.right) {
        node.right = newNode;
      }else{
        this.insertNode(node.right, newNode);
      }
       }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (!node) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal(){
    let result = []
    this.inorder(this.root,result)
    return result
  }

  inorder(node,result){
    if(node !== null){
      this.inorder(node.left,result)
      result.push(node.key)
      this.inorder(node.right,result)
    }
  }

  preOrderTraversal(){
    let result = []
    this.preOrder(this.root,result)
    return result
  }

  preOrder(node,result){
    if(node !== null){
      result.push(node.key)
      this.preOrder(node.left,result)
      this.preOrder(node.right,result)
    }
  }

  postOrderTraversal(){
    let result = []
    this.postOrder(this.root,result)
    return result
  }

  postOrder(node,result){
    if(node !== null){
      this.postOrder(node.left,result)
      this.postOrder(node.right,result)
      result.push(node.key)
    }
  }

  dfs(){
    if (!this.root) return [];
    let stack = [this.root]
    let result = []

    while(stack.length > 0){
       let node = stack.pop()
       result.push(node.key)

       if(node.right !== null) stack.push(node.right)
       if(node.left !== null) stack.push(node.left)
      
    }
    return result
  }

  bfs(){
    if (!this.root) return [];
    let queue = [this.root]
    let result = []

    while(queue.length > 0){
       let node = queue.shift()
       result.push(node.key)

       if(node.left !== null) queue.push(node.left)
       if(node.right !== null) queue.push(node.right)
    }
    return result
  }
  
}

const binary = new BinarySearchTree();
binary.insert(5);
binary.insert(3);
binary.insert(7);
// binary.delete(5)
// console.log(binary);
// console.log(binary.inOrderTraversal())
// console.log(binary.preOrderTraversal())
// console.log(binary.postOrderTraversal())
console.log(binary.dfs())
console.log(binary.bfs())
