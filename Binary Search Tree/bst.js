class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(val) {
    const newNode = new Node(val)
    if (!this.root) this.root = newNode
    let current = this.root
    while (current) {
      if (current.value === val) return undefined
      if (current.value < val) {
        if (!current.right) {
          current.right = newNode
          break
        }
        current = current.right
      } else {
        if (!current.left) {
          current.left = newNode
          break
        }
        current = current.left
      }
    }
    return this
  }
  insertRec(val, node = this.root) {
    if (!this.root) {
      const newNode = new Node(val)
      this.root = newNode
      return
    }
    if (node.value < val) {
      if (!node.right) {
        const newNode = new Node(val)
        node.right = newNode
        return
      }
      this.insertRec(val, node.right)
    } else if (node.value > val) {
      if (!node.left) {
        const newNode = new Node(val)
        node.left = newNode
        return
      }
      this.insertRec(val, node.left)
    }
  }
  find(val) {
    let current = this.root
    while (current) {
      if (current.value === val) return true
      else if (current.value < val) current = current.right
      else current = current.left
    }
    return false
  }
  findRec(val, node = this.root) {
    if (!node) return false
    if (node.value === val) return true
    else if (node.value > val) {
      return this.findRec(val, node.left)
    } else {
      return this.findRec(val, node.right)
    }
  }
  BFS() {
    let queue = [this.root]
    while (queue.length) {
      let node = queue.shift()
      console.log(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  BFSRec(queue = [this.root]) {
    if (!queue.length) return
    let node = queue.shift()
    console.log(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    this.BFSRec(queue)
  }
  DFSPreOrder(node = this.root, result = []) {
    result.push(node.value)
    if (node.left) this.DFSPreOrder(node.left, result)
    if (node.right) this.DFSPreOrder(node.right, result)
    return result
  }
  DFSPreOrderIt() {
    let stack = [this.root]
    while (stack.length) {
      let node = stack.pop()
      console.log(node.value)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
  }
  DFSPostOrder(node = this.root) {
    if (node.left) this.DFSPostOrder(node.left)
    if (node.right) this.DFSPostOrder(node.right)
    console.log(node.value)
  }
  DFSPostOrderIt() {
    let stack = [this.root]
    let stackResult = []
    while (stack.length) {
      let node = stack.pop()
      stackResult.push(node)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    while (stackResult.length) {
      console.log(stackResult.pop().value)
    }
  }
  DFSInOrder(node = this.root) {
    if (node.left) this.DFSInOrder(node.left)
    console.log(node.value)
    if (node.right) this.DFSInOrder(node.right)
  }
  DFSInOrderIt() {
    let stack = []
    let current = this.root
    while (stack.length || current) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      let node = stack.pop()
      console.log(node.value)
      current = node.right
    }
  }
  remove(val) {
    let current = this.root
    let parent = this.root
    while (current) {
      if (current.value === val) {
        if (!current.left && !current.right) {
          if (parent.left.value === val) parent.left = null
          else parent.right = null
        } else if (current.left && !current.right) {
          if (parent.left.value === val) parent.left = current.left
          else parent.right = current.left
        } else if (!current.left && current.right) {
          if (parent.left.value === val) parent.left = current.right
          else parent.right = current.right
        } else {
          current.value = this.inOrderSuccessor(current)
        }
        return true
      } else if (current.value > val) {
        parent = current
        current = current.left
      } else {
        parent = current
        current = current.right
      }
    }
    return false
  }
  inOrderSuccessor(node) {
    let successor = node.right
    let successorParent = node
    while (successor.left) {
      successorParent = successor
      successor = successor.left
    }
    if (successorParent.left.value === successor.value)
      successorParent.left = null
    else successorParent.right = null
    return successor.value
  }
  findClosestVal(val) {
    let target = Infinity
    let value
    let current = this.root
    while (current) {
      let difference = Math.abs(current.value - val)
      if (difference < target) {
        target = difference
        value = current.value
      }
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        break
      }
    }
    return value
  }
  isValidBST(tree) {
    function traverse(node, min, max) {
      if (node) {
        if (node.value <= min || node.value >= max) return false
        return (
          traverse(node.left, min, node.value) &&
          traverse(node.right, node.value, max)
        )
      }
      return true
    }
    return traverse(tree)
  }
}

const tree = new BST()

tree.insertRec(5)
tree.insertRec(10)
tree.insertRec(3)
tree.insertRec(1)
tree.insertRec(4)
tree.insertRec(12)
tree.insertRec(7)
tree.insertRec(11)
tree.insertRec(13)
tree.insertRec(6)
tree.insertRec(8)

console.log(tree.findRec(4))
// tree.BFSRec()
// console.log(tree.DFSPreOrder())

// tree.DFSPreOrderIt()

// tree.DFSPostOrderIt()

// tree.DFSInOrderIt()

// console.log(tree.remove(10))

console.dir(tree, { depth: 4 })

console.log(tree.findClosestVal(-500))

console.log(tree.isValidBST(tree))
