// 合并两个有序数组
function MergeOrderArr(arr1, arr2) {
  let len1 = arr1.length, len2 = arr2.length
  let arr = []
  let i = 0, j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i++])
      len1--
    }
    if (arr1[i] >= arr2[j]) {
      arr.push(arr2[j++])
      len2--
    }
  }
  if (len1) {
    const remain = arr1.slice(arr1.length - len1)
    arr = arr.concat(remain)
  }
  if (len2) {
    const remain = arr2.slice(arr2.length - len2)
    arr = arr.concat(remain)
  }

  // 也可以用 i/j做判断
  // if(i <= arr1.length){
  //     const remain = arr1.slice(i+1)
  //     arr= arr.concat(remain)
  // }
  // if(j <= arr2.length){
  //     const remain = arr2.slice(j+1)
  //     arr= arr.concat(remain)
  // }
  // return arr

}

console.log(MergeOrderArr([0, 3, 5, 9, 12, 70], [1, 2, 5, 8]))


