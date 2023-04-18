function heapify(arr, n, i) {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2
  if (left < n && arr[left] > arr[largest]) largest = left
  if (right < n && arr[right] > arr[largest]) largest = right
  if (i !== largest) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, n, largest)
  }
}

const arr = [3, 2, 6, 9, 44, 1, 23, 67]
const n = arr.length

for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
  heapify(arr, n, i)
}

console.log(arr)
