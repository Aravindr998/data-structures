class Heap {
  constructor() {
    this.values = []
  }
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (element > this.values[parentIndex]) break
      this.values[index] = this.values[parentIndex]
      this.values[parentIndex] = element
      index = parentIndex
    }
  }
  extractMin() {
    let min = this.values[0]
    let end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.trickleDown()
    }
    return min
  }
  trickleDown() {
    let index = 0
    let element = this.values[0]
    let length = this.values.length
    while (index < length) {
      let leftChildIdx = 2 * index + 1
      let rightChildIdx = 2 * index + 2
      let leftChild,
        rightChild,
        swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild < element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
  trickleDownRec(n, i = 0) {
    let index = i
    let element = this.values[index]
    let leftChildIdx = 2 * index + 1
    let rightChildIdx = 2 * index + 2
    if (leftChildIdx < n && this.values[index] > this.values[leftChildIdx])
      index = leftChildIdx
    if (rightChildIdx < n && this.values[index] > this.values[rightChildIdx])
      index = rightChildIdx
    if (index !== i) {
      ;[this.values[i], this.values[index]] = [
        this.values[index],
        this.values[i],
      ]
      this.heapify(n, index)
    }
  }
  heapify(arr, n, i) {
    let index = i
    let leftChildIdx = 2 * index + 1
    let rightChildIdx = 2 * index + 2
    if (leftChildIdx < n && arr[leftChildIdx] < arr[index]) index = leftChildIdx
    if (rightChildIdx < n && arr[rightChildIdx] < arr[index])
      index = rightChildIdx
    if (index !== i) {
      ;[arr[index], arr[i]] = [arr[i], arr[index]]
      this.heapify(arr, n, index)
    }
  }
  heapifyIterative(arr, n, i) {
    let index = i
    while (index < n) {
      let leftChildIdx = 2 * index + 1
      let rightChildIdx = 2 * index + 2
      let smallerChildIdx = index
      if (leftChildIdx < n && arr[leftChildIdx] < arr[smallerChildIdx])
        smallerChildIdx = leftChildIdx
      if (rightChildIdx < n && arr[rightChildIdx] < arr[smallerChildIdx])
        smallerChildIdx = rightChildIdx
      if (smallerChildIdx === index) break
      ;[arr[smallerChildIdx], arr[index]] = [arr[index], arr[smallerChildIdx]]
      index = smallerChildIdx
    }
  }
  heapSort() {
    let n = this.values.length
    const arr = this.values
    for (let i = n - 1; i >= 0; i--) {
      ;[arr[i], arr[0]] = [arr[0], arr[i]]
      this.heapify(i)
    }
  }
}

const heap = new Heap()

heap.insert(10)
heap.insert(5)
heap.insert(6)
heap.insert(21)
heap.insert(13)
heap.insert(7)
heap.insert(1)
heap.insert(9)

// heap.heapSort()

// console.log(heap)

// console.log(heap.extractMin())

// console.log(heap)
// console.log(heap.extractMin())

// console.log(heap)
// console.log(heap.extractMin())

// console.log(heap)
// console.log(heap.extractMin())

// console.log(heap)
// console.log(heap.extractMin())

console.log(heap)

let arr = [3, 2, 6, 9, 44, 1, 23, 67]

let n = arr.length

parentIndex = Math.floor((n - 1) / 2)

for (let i = parentIndex; i >= 0; i--) {
  heap.heapifyIterative(arr, n, i)
}

console.log(arr)
