class HashTable {
  constructor(size = 7) {
    this.keyMap = new Array(size)
    this.size = size
    this.maxLoadFactor = 0.66
    this.count = 0
    this.increasedBy = 1.5
  }
  _hash(key) {
    let total = 0
    const PRIME = 5
    for (let char of key) {
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }
  increaseSize() {
    let temp = this.keyMap
    this.size = Math.ceil(this.size * this.increasedBy)
    this.keyMap = new Array(this.size)
    this.count = 0
    temp.forEach((item) => {
      this.set(...item)
    })
  }
  set(key, val) {
    const loadFactor = (this.count + 1) / this.size
    if (loadFactor >= this.maxLoadFactor) this.increaseSize()
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = [key, val]
    } else {
      console.log(key)
      while (this.keyMap[index]) {
        if (this.keyMap[index][0] === key) {
          this.keyMap[index] = [key, val]
          return
        }
        index = (index + 1) % this.size
      }
      this.keyMap[index] = [key, val]
    }
    this.count++
  }
  get(key) {
    let index = this._hash(key)
    let newIndex = index
    while (this.keyMap[newIndex]) {
      if (this.keyMap[newIndex][0] === key) {
        return this.keyMap[newIndex][1]
      }
      newIndex = (newIndex + 1) % this.size
      if (newIndex === index) break
    }
    return undefined
  }
  remove(key) {
    let index = this._hash(key)
    let found = false
    while (this.keyMap[index]) {
      if (this.keyMap[index][0] === key) {
        found = true
        break
      }
      index = (index + 1) % this.size
    }
    if (!found) return false
    delete this.keyMap[index]
    this.count--
    index++
    while (this.keyMap[index]) {
      const [key, value] = this.keyMap[index]
      this.set(key, value)
      index++
    }
    return true
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

console.log(table.remove("three"))

console.log(table.get("one"))

console.log(table.get("four"))

console.log(table)
