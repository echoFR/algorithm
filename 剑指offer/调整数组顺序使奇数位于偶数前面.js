function reOrderArray(array) {
  let n = array.length
  for (let i = 0; i < n; i++) {
    let j = 0
    while (j < n - 1) {
      if (array[j] % 2 === 0 && array[j + 1] % 2 !== 0) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      } else {
        j++
      }
    }
  }
  return array
}