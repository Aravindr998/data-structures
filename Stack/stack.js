class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const current = this.first
      this.first = newNode
      this.first.next = current
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    if (this.size === 1) {
      this.last = null
    }
    const value = this.first.value
    this.first = this.first.next
    this.size--
    return value
  }
  showAll() {
    return this
  }
  toArray() {
    if (!this.first) return null
    let current = this.first
    let result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }
  reverse() {
    if (!this.first) return null
    let node = this.first
    this.first = this.last
    this.last = node
    let prev = null
    let next
    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

const stack = new Stack()

console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.push(4))

console.log(stack.showAll())
console.log(stack.toArray())

console.log(stack.reverse())

console.log(stack.showAll())
console.log(stack.toArray())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.showAll())
