class Heap {
  constructor() {
    this.values = []
  }
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    let element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.values[parentIdx] > element) break
      this.values[idx] = this.values[parentIdx]
      this.values[parentIdx] = element
      idx = parentIdx
    }
  }
  remove() {
    let max = this.values[0]
    let end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    let element = this.values[idx]
    while (idx < this.values.length) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let swap = null
      let leftChild, rightChild
      if (this.values[leftChildIdx]) {
        leftChild = this.values[leftChildIdx]
        if (element < leftChild) swap = leftChildIdx
      }
      if (this.values[rightChild]) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && element < rightChild) ||
          (swap !== null && leftChild < rightChild)
        )
          swap = rightChildIdx
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
    }
  }
}

const heap = new Heap()

heap.insert(1)
heap.insert(3)
heap.insert(5)
heap.insert(9)
heap.insert(95)

// console.log(heap.remove())

console.log(heap)

function heapify(arr, i, n) {
  largest = i
  let leftChildIdx = 2 * i + 1
  let rightChildIdx = 2 * i + 2
  if (leftChildIdx < n && arr[leftChildIdx] > arr[largest])
    largest = leftChildIdx
  if (rightChildIdx < n && arr[rightChildIdx] > arr[largest])
    largest = rightChildIdx
  if (i != largest) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest, n)
  }
}

const arr = [9, 3, 95, 1, 5]

let n = Math.floor((arr.length - 1) / 2)

for (let i = n; i >= 0; i--) {
  heapify(arr, i, arr.length - 1)
}
console.log(arr)

function heapSort(arr) {
  let n = Math.floor((arr.length - 1) / 2)
  for (let i = n; i >= 0; i--) {
    heapify(arr, i, arr.length)
  }
  n = arr.length
  for (let i = n - 1; i >= 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, 0, i)
  }
}
console.log(heapSort(arr))
console.log(arr)
