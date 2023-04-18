class Node {
  constructor(val, priority) {
    this.value = val
    this.weight = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    let element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.values[parentIdx].weight < element.weight) break
      this.values[idx] = this.values[parentIdx]
      this.values[parentIdx] = element
      idx = parentIdx
    }
  }
  dequeue() {
    let min = this.values[0]
    let end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }
  sinkDown() {
    let idx = 0
    let element = this.values[idx]
    while (idx < this.values.length) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild,
        rightChild,
        swap = null
      if (this.values[leftChildIdx]) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.weight < element.weight) swap = leftChildIdx
      }
      if (this.values[rightChild]) {
        rightChild = this.values[rightChild]
        if (
          (!swap && rightChild.weight < element.weight) ||
          (swap && rightChild.weight < leftChild.weight)
        )
          swap = rightChildIdx
      }
      if (!swap) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

const queue = new PriorityQueue()

queue.enqueue("hi", 10)
queue.enqueue("hello", 30)
queue.enqueue("wow", 1)
queue.enqueue("where", 5)
queue.enqueue("hmmm", 2)
queue.enqueue("ok", 11)

console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enqueue("okay", 6)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
