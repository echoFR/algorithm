function Find(target, array) {
  let row = 0
  let column = array.length - 1
  const rows = array[0].length
  let found = false
  while (row < rows && column >= 0) {
    if (array[row][column] === target) {
      //return true
      found = true
      break
    }
    if (array[row][column] > target) {
      --column
    } else {
      ++row
    }
  }
  // return false
  return found
}


// function Find(target, array)
// {
//     return array.some(arr=>arr.some(e=>e===target))
// }