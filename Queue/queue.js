class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null
    if (this.size === 1) {
      this.last = null
    }
    const temp = this.first
    this.first = this.first.next
    return temp.value
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
}

const queue = new Queue()

console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
console.log(queue.enqueue(5))

console.log(queue.toArray())

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.toArray())
