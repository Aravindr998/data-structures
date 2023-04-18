class Graph {
  constructor() {
    this.numVertices = 0
    this.adjMatrix = []
    this.vertexValues = []
  }
  addVertex(value) {
    this.vertexValues.push(value)
    this.numVertices++
    for (let i = 0; i < this.adjMatrix.length; i++) {
      this.adjMatrix[i].push(0)
    }
    this.adjMatrix.push(new Array(this.numVertices).fill(0))
  }
  addEdge(v1, v2) {
    let i = this.vertexValues.indexOf(v1)
    let j = this.vertexValues.indexOf(v2)
    this.adjMatrix[i][j] = 1
    this.adjMatrix[j][i] = 1
  }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")

console.log(graph)

for (let item of graph.adjMatrix) {
  console.log(item)
}
