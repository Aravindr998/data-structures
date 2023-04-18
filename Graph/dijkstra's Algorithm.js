class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
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
    let index = this.values.length - 1
    let element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.values[index].priority > this.values[parentIndex].priority) break
      this.values[index] = this.values[parentIndex]
      this.values[parentIndex] = element
      index = parentIndex
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
    let element = this.values[0]
    let index = 0
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let swap = null
      let leftChild, rightChild
      if (this.values[leftChildIndex]) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) swap = leftChildIndex
      }
      if (this.values[rightChildIndex]) {
        rightChild = this.values[rightChildIndex]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this
  }
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) this.addVertex(v1)
    if (!this.adjacencyList[v2]) this.addVertex(v2)
    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
    return this
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return null
    this.adjacencyList[vertex].forEach((item) => {
      this.adjacencyList[item.node] = this.adjacencyList[item.node].filter(
        (v) => v.node !== vertex
      )
    })
    delete this.adjacencyList[vertex]
    return this
  }
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v.node !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v.node !== v1)
    return this
  }
  shortestPath(start, end) {
    const path = []
    const node = new PriorityQueue()
    const distance = {}
    const previous = {}
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0
        node.enqueue(vertex, 0)
      } else {
        distance[vertex] = Infinity
        node.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    while (node.values.length) {
      let smallest = node.dequeue().value
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distance[smallest] !== Infinity)
        for (let nextNode of this.adjacencyList[smallest]) {
          let candidate = distance[smallest] + nextNode.weight
          if (candidate < distance[nextNode.node]) {
            distance[nextNode.node] = candidate
            previous[nextNode.node] = smallest
            node.enqueue(nextNode.node, candidate)
          }
        }
    }
    return path.concat(start).reverse()
  }
}

var graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

// graph.removeVertex("D")

// console.log(graph)

console.log(graph.shortestPath("A", "E"))
