let arr = [3, 1, 6, 2, 6, 8, 4]

function bubbleSort(arr) {
  let noSwap
  for (let i = arr.length; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return arr
}

console.log(bubbleSort(arr))

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

console.log(selectionSort(arr))

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort(arr))

function merge(arr1, arr2) {
  let i = 0,
    j = 0,
    results = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j])
      j++
    } else {
      results.push(arr1[i])
      i++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}

console.log(merge([1, 2, 4], [3, 4, 5, 6]))

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function pivot(arr, start, end) {
  let i = start - 1
  let pivot = arr[end]
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  i++
  let temp = arr[i]
  arr[i] = arr[end]
  arr[end] = temp
  return i
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return
  let index = pivot(arr, start, end)
  quickSort(arr, index + 1, end)
  quickSort(arr, start, index - 1)
}

quickSort(arr)
console.log(arr)

console.log(mergeSort([4, 5, 2, 6, 2, 8, 9, 2]))
