class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  getAll() {
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
  fromArray(arr) {
    arr.forEach((item) => {
      const newNode = new Node(item)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }
      this.length++
    })
    return this
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let prevNode
    while (current.next) {
      prevNode = current
      current = current.next
    }
    const removed = this.tail
    prevNode.next = null
    this.tail = prevNode
    this.length--
    return removed
  }
  showAll() {
    return this
  }
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.length--
    current.next = null
    return current
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      const current = this.head
      this.head = newNode
      this.head.next = current
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    let position = 0
    while (position !== index) {
      current = current.next
      position++
    }
    return current
  }
  set(index, val) {
    const node = this.get(index)
    if (node) {
      node.value = val
      return true
    } else {
      return false
    }
  }
  insert(index, val) {
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)
    const node = this.get(index - 1)
    if (!node) return false
    const newNode = new Node(val)
    const next = node.next
    node.next = newNode
    newNode.next = next
    this.length++
    return true
  }
  remove(index) {
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) !!this.pop()
    const prevNode = this.get(index - 1)
    if (!prevNode) return false
    const nextNode = prevNode.next
    prevNode.next = nextNode?.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return true
  }
  reverse() {
    // let current = this.head
    // this.head = this.tail
    // this.tail = current
    // let nextNode
    // let prevNode = null
    // for (let i = 0; i < this.length; i++) {
    //   nextNode = current.next
    //   current.next = prevNode
    //   prevNode = current
    //   current = nextNode
    // }
    // return this
    let current = this.head
    this.head = this.tail
    this.tail = current
    let prevNode = null
    let nextNode
    while (current) {
      nextNode = current.next
      current.next = prevNode
      prevNode = current
      current = nextNode
    }
    return this
  }
  searchByValue(val) {
    let current = this.head
    while (current) {
      if (current.value === val) {
        return current
      }
      current = current.next
    }
    return null
  }
  insertAfterValue(val, newVal) {
    let current = this.head
    let currentNode
    while (current) {
      if (current.value === val) {
        currentNode = current
        break
      }
      current = current.next
    }
    let next = currentNode.next
    const newNode = new Node(newVal)
    currentNode.next = newNode
    newNode.next = next
    this.length++
    return this
  }
  arrayToList(array) {
    let newNode
    array.forEach((item) => {
      newNode = new Node(item)
      if (this.head) {
        this.tail.next = newNode
        this.tail = newNode
      } else {
        this.head = newNode
        this.tail = newNode
      }
    })
    this.length = array.length
    return this
  }
  deleteWithValue(value) {
    let current = this.head
    let prev = null
    let position = 1
    let flag = false
    while (current) {
      if (current.value === value) {
        flag = true
        break
      }
      position++
      prev = current
      current = current.next
    }
    if (flag) {
      if (prev) {
        prev.next = current.next
      } else {
        this.head = current.next
      }
      if (!current.next) {
        this.tail = prev
      }
      this.length--
      return current
    } else {
      return null
    }
  }

  deleteAllWithValue(value) {
    let current = this.head
    let prev = null
    let flag = false
    while (current) {
      if (current.value === value) {
        flag = true
        if (prev) {
          prev.next = current.next
          current = prev.next
        } else {
          this.head = current.next
          current = this.head
        }
        if (!current) {
          this.tail = prev
        }
        this.length--
      } else {
        prev = current
        current = current.next
        position++
      }
    }
    if (flag) {
      return true
    }
    return false
  }
}

const list = new SinglyLinkedList()

console.log(list.fromArray([1, 2, 3, 4, 5]))

list.push(6)

list.pop()

console.log(list.shift())

list.unshift(1)

console.log(list.getAll())

console.log(list.showAll())

console.log(list.set(1, "hi"))

console.log(list.get(2))

console.log(list.getAll())
console.log(list.insert(1, "wow"))

console.log(list.remove(1))

console.log(list.showAll())

console.log(list.get(2))

console.log(list.getAll())

console.log(list.reverse())

console.log(list.getAll())

console.log(list.searchByValue("hi"))

console.log(list.insertAfterValue(4, "hello"))

console.log(list.getAll())
