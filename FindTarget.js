// 查找第一个给定元素
function FindFirst(arr, target) {
  let low = 0, high = arr.length - 1
  while (low <= high) {
    let mid = Math.ceil((high + low) / 2)
    if (arr[mid] < target) {
      low = mid + 1
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === 0 || arr[mid - 1] !== target) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}
// console.log(FindFirst([1, 2, 5, 6, 8, 8, 8, 9, 12], 8))

// 查找最后一个给定的值
function FindLast(arr, target) {
  let low = 0, high = arr.length - 1
  while (low <= high) {
    let mid = Math.ceil((high + low) / 2)
    if (arr[mid] < target) {
      low = mid + 1
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== target) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}
// console.log(FindLast([1, 2, 5, 6, 8, 8, 8, 9, 12], 8))

// 查找第一个大于等于给定元素的位置
function FindFirstBig(arr, target) {
  let low = 0, high = arr.length
  while (low <= high) {
    let mid = Math.ceil((high + low) / 2)
    if (arr[mid] >= target) {
      if (mid === 0 || arr[mid - 1] < target) {
        return mid
      } else {
        high = mid - 1
      }
    } else if (arr[mid] < target) {
      low = mid + 1
    }
  }
  return -1

}
// console.log(FindFirstBig([1, 2, 5, 6, 8, 8, 8, 9, 12], 8))

// 查找最后一个小于等于给定值的位置
function FindLastSmall(arr, target) {
  let low = 0, high = arr.length - 1
  while (low <= high) {
    let mid = Math.ceil((high + low) / 2)
    if (arr[mid] > target) {
      high = mid - 1
    } else {
      // arr[mid] <= target
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}
// console.log(FindLastSmall([1, 2, 5, 6, 8, 8, 8, 9, 12], 8))


// 4，5，6，1，2，3



