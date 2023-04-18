class Node {
  constructor(val) {
    this.value = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  fromArray(arr) {
    arr.forEach((item, index) => {
      const newNode = new Node(item)
      if (!this.head) {
        this.head = newNode
        this.tail = this.head
      } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      }
      this.length++
    })
    return this
  }
  toArray() {
    let current = this.head
    const arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let end = this.tail
    let prevNode = end.prev
    prevNode.next = null
    this.tail = prevNode
    end.prev = null
    this.length--
    return end
  }
  showAll() {
    return this
  }
}

const list = new DoublyLinkedList()

console.log(list.fromArray([1, 2, 3, 4, 5]))

console.log(list.pop())

console.log(list.toArray())

console.log(list.showAll())
