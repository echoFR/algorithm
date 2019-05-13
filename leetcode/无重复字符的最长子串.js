// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
  let arr = s.split('')
  let res = []
  let num = 0
  let tempArr = []
  let tempNum = 0
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i])
    tempNum++
    for (let j = i + 1; j < arr.length; j++) {
      // 如果不存在则添加
      if (tempArr.indexOf(arr[j]) === -1) {
        tempArr.push(arr[j])
        tempNum++
      } else {
        break
      }
    }
    // 替换返回值  
    if (tempNum > num) {
      res = tempArr
      num = tempNum
    }
    // 已经在tempNum > num时替换了返回值，所以可以每次都置空
    tempArr = []
    tempNum = 0
  }
  console.log(res)
  return num
};

console.log(lengthOfLongestSubstring("abcabcbb"))