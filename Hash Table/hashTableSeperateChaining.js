class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0
    const PRIME = 31
    for (let char of key) {
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    const bucket = this.keyMap[index]
    if (!bucket) {
      this.keyMap[index] = [[key, value]]
    } else {
      const existing = bucket.find((item) => item[0] === key)
      if (existing) {
        existing[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }
  get(key) {
    let index = this._hash(key)
    const bucket = this.keyMap[index]
    if (bucket) {
      const result = bucket.find((item) => item[0] === key)
      return result[1]
    }
    return undefined
  }
  keys() {
    let result = []
    for (let item of this.keyMap) {
      for (let element of item) {
        result.push(element[0])
      }
    }
    return result
  }
  values() {
    let result = []
    for (let item of this.keyMap) {
      for (let element of item) {
        if (!result.includes(element[1])) {
          result.push(element[1])
        }
      }
    }
    return result
  }
  remove(key) {
    let index = this._hash(key)
    const bucket = this.keyMap[index]
    const element = bucket.find((item) => item[0] === key)
    if (element) bucket.splice(bucket.indexOf(element), 1)
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

console.log(table.get("three"))

console.log(table.get("seven"))

console.log(table.keys())

console.log(table.values())
