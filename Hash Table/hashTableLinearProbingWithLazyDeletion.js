class HashTable {
  constructor(size = 7) {
    this.keyMap = new Array(size)
    this.size = size
    this.count = 0
    this.maxLoadFactor = 0.66
    this.increasedBy = 2
  }
  _hash(key) {
    let total = 0
    const PRIME = 31
    for (let char of key) {
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.size
    }
    return total
  }
  increaseSize() {
    let temp = this.keyMap
    this.size = Math.ceil(this.size * this.increasedBy)
    this.keyMap = new Array(this.size)
    this.count = 0
    temp.forEach((item) => {
      if (item) {
        this.set(...item)
      }
    })
  }
  set(key, val) {
    const loadFactor = (this.count + 1) / this.size
    if (loadFactor > this.maxLoadFactor) this.increaseSize()
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = [key, val]
    } else {
      let found = false
      let newIndex = index
      while (this.keyMap[newIndex] || this.keyMap[newIndex] === null) {
        if (this.keyMap[newIndex] && this.keyMap[newIndex][0] === key) {
          this.keyMap[newIndex] = [key, val]
          return
        }
        newIndex = (newIndex + 1) % this.size
      }
      while (this.keyMap[index]) {
        index = (index + 1) % this.size
      }
      this.keyMap[index] = [key, val]
    }
    this.count++
  }
  get(key) {
    let index = this._hash(key)
    let newIndex = index
    while (this.keyMap[newIndex] || this.keyMap[newIndex] === null) {
      if (this.keyMap[newIndex] && this.keyMap[newIndex][0] === key) {
        return this.keyMap[newIndex][1]
      }
      newIndex = (newIndex + 1) % this.size
      if (index === newIndex) break
    }
    return undefined
  }
  remove(key) {
    let index = this._hash(key)
    let newIndex = index
    while (this.keyMap[newIndex] || this.keyMap[newIndex] === null) {
      if (this.keyMap[newIndex] && this.keyMap[newIndex][0] === key) {
        this.keyMap[newIndex] = null
        return true
      }
      newIndex = (newIndex + 1) % this.size
      if (index === newIndex) break
    }
  }
}

const table = new HashTable()

table.set("one", 1)
table.set("two", 2)
table.set("three", 3)
table.set("three", 13)
table.set("four", 4)
table.set("five", 5)
table.set("six", 6)
table.set("seven", 7)
table.set("eight", 8)
table.set("nine", 8)
table.set("ten", 10)

console.log(table.remove("three"))

table.set("four", 10)

console.log(table.get("one"))

console.log(table.get("four"))

table.remove("six")

console.log(table)
