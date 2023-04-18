class Graph {
  constructor() {
    this.adjList = {}
  }
  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = []
  }
  addEdge(v1, v2) {
    if (!this.adjList[v1]) this.adjList[v1] = []
    if (!this.adjList[v2]) this.adjList[v2] = []
    if (!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2)
    if (!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    if (!this.adjList[v1] || !this.adjList[v2]) return false
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2)
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1)
    return true
  }
  removeVertex(v) {
    if (!this.adjList[v]) return false
    for (let item in this.adjList) {
      if (this.adjList[item] === this.adjList[v]) continue
      this.adjList[item] = this.adjList[item].filter((vertex) => vertex !== v)
    }
    delete this.adjList[v]
  }
  BFS(vertex) {
    const queue = [vertex]
    const visited = {}
    const result = []
    visited[vertex] = true
    while (queue.length) {
      const currentVertex = queue.shift()
      result.push(currentVertex)
      for (let item of this.adjList[currentVertex]) {
        if (!visited[item]) {
          visited[item] = true
          queue.push(item)
        }
      }
    }
    return result
  }
  BFSRec(vertex, visited = {}, result = [], queue = [vertex]) {
    if (!queue.length) return result
    const currentNode = queue.shift()
    visited[currentNode] = true
    result.push(currentNode)
    for (let item of this.adjList[currentNode]) {
      if (!visited[item]) {
        visited[item] = true
        queue.push(item)
      }
    }
    const nextNode = queue[0]
    return this.BFSRec(nextNode, visited, result, queue)
  }
  DFS(start) {
    let stack = [start]
    let visited = {}
    let result = []
    visited[start] = true
    while (stack.length) {
      const currentVertex = stack.pop()
      result.push(currentVertex)
      for (let item of this.adjList[currentVertex]) {
        if (!visited[item]) {
          visited[item] = true
          stack.push(item)
        }
      }
    }
    return result
  }
  DFSRec(start, visited = {}, result = []) {
    result.push(start)
    visited[start] = true
    for (let item of this.adjList[start]) {
      if (!visited[item]) {
        visited[item] = true
        this.DFSRec(item, visited, result)
      }
    }
    return result
  }
  allValidPaths(start, end) {
    let visited = {}
    let result = []
    let adjList = this.adjList
    function DFSearch(start, arr = []) {
      arr.push(start)
      visited[start] = true
      if (start === end) {
        result.push(arr)
      }
      for (let item of adjList[start]) {
        if (!visited[item]) {
          visited[item] = true
          DFSearch(item, [...arr])
        }
      }
      visited[start] = false
    }
    DFSearch(start)
    return result
  }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("B", "D")
graph.addEdge("E", "D")
graph.addEdge("E", "A")
console.log(graph)

// graph.removeVertex("C")

// console.log(graph)

console.log(graph.BFSRec("A"))
console.log(graph.DFSRec("A"))

console.log(graph.allValidPaths("A", "E"))
