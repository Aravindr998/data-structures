// function binarySearch(arr, value) {
//   let start = 0
//   let end = arr.length - 1
//   let index
//   while (start <= end) {
//     index = -1
//     let n = Math.floor((start + end) / 2)
//     if (arr[n] === value) {
//       index = n
//       break
//     } else if (arr[n] > value) {
//       end = n - 1
//     } else {
//       start = n + 1
//     }
//   }
//   return index
// }

let arr = [1, 3, 5, 7, 8, 9]
let x = 5

console.log("Element at position", recursiveBinarySearch(arr, x))

function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1
  let index
  while (start <= end) {
    index = -1
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === value) {
      index = mid
      break
    } else if (arr[mid] > value) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return index
}

// function recursiveBinarySearch(arr, value, start = 0, end = arr.length - 1) {
//   if (start > end) return -1
//   const mid = Math.floor((start + end) / 2)
//   if (arr[mid] === value) {
//     return mid
//   } else if (arr[mid] > value) {
//     return recursiveBinarySearch(arr, value, start, mid - 1)
//   } else {
//     return recursiveBinarySearch(arr, value, mid + 1, end)
//   }
// }

function recursiveBinarySearch(arr, value, start = 0, end = arr.length) {
  if (start > end) return -1
  const mid = Math.floor((start + end) / 2)
  if (arr[mid] === value) {
    return mid
  } else if (arr[mid] > value) {
    return recursiveBinarySearch(arr, value, start, mid - 1)
  } else {
    return recursiveBinarySearch(arr, value, mid + 1, end)
  }
}

function recursiveLinearSearch(arr, value, index = 0) {
  if (index >= arr.length) return -1
  if (arr[index] === value) return index
  else {
    index++
    return recursiveBinarySearch(arr, value, index)
  }
}

console.log(recursiveLinearSearch(arr, x))

function fibonacci(value, sum = 0) {
  if (value <= 1) return value
  return fibonacci(value - 1) + fibonacci(value - 2)
}

console.log(fibonacci(5))

//[0,1,1,2,3,5,8]

let num1 = new Number(5)

let num2 = num1

console.log(typeof num2)

console.log(typeof (num1 * 2))
