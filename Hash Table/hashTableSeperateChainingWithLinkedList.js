class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  shift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let temp = this.head
      this.head = newNode
      this.head.next = temp
    }
    return ++this.length
  }
}

class HashTable {
  constructor(size = 7) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0
    const PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      let list = new LinkedList()
      list.shift([key, value])
      this.keyMap[index] = list
    } else {
      let current = this.keyMap[index].head
      while (current) {
        if (current.value[0] === key) {
          current.value[1] = value
          return
        }
        current = current.next
      }
      this.keyMap[index].shift([key, value])
    }
  }
  get(key) {
    const index = this._hash(key)
    let bucket = this.keyMap[index].head
    while (bucket) {
      if (bucket.value[0] === key) {
        return bucket.value[1]
      }
      bucket = bucket.next
    }
    return undefined
  }
  remove(key) {
    const index = this._hash(key)
    let bucket = this.keyMap[index].head
    let prevNode = null
    while (bucket) {
      if (bucket.value[0] === key) {
        if (prevNode) {
          prevNode.next = bucket.next
          this.keyMap[index].length--
        } else {
          this.keyMap[index].head = bucket.next
          this.keyMap[index].length--
        }
        if (this.keyMap[index].length === 0) {
          this.keyMap[index].tail = null
        } else if (this.keyMap[index].length === 1) {
          this.keyMap[index].tail = this.keyMap[index].head
        }
        return true
      }
      prevNode = bucket
      bucket = bucket.next
    }
    return false
  }
}

const table = new HashTable()

table.set("one", 1)
table.set("two", 2)
table.set("three", 3)
table.set("four", 4)
table.set("five", 5)
table.set("six", 6)
table.set("seven", 7)
table.set("eight", 8)
table.set("nine", 9)
table.set("ten", 10)
table.set("eleven", 11)

table.remove("one")

console.log(table.get("four"))
