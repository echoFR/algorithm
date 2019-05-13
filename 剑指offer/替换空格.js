function replaceSpace(str) {
  const arr = str.split('')
  let emptyNum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      emptyNum++
    }
  }
  let start = arr.length - 1
  let end = start + emptyNum * 2
  while (start !== end) {
    if (arr[start] !== ' ') {
      arr[end] = arr[start]
      end--
      start--
    } else {
      arr[end--] = '0'
      arr[end--] = '2'
      arr[end--] = '%'
      start--
    }
  }
  const newStr = arr.join('')
  return newStr
}