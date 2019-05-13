function secodeSearch(arr, target) {
    // 二分查找
    let low = 0, high, mid
    if (Array.isArray(arr)) {
        high = arr.length - 1
    }
    // 只要范围没有缩小到只含一个元素
    while (low <= high) {
        mid = Math.round((low + high) / 2)
        if (arr[mid] < target) {
            low = mid + 1
        } else if (arr[mid] > target) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}
console.log(secodeSearch([1, 2, 3, 4, 5], 5))