// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 罗马数字 2 写做 II ，即为两个并列的 1。
// 12 写做 XII ，即为 X + II 。 
// 27 写做  XXVII, 即为 XX + V + II 。
/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let strs = ["M", "CM", 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let result = ''

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += strs[i]
      num = num - values[i]
    }
  }

  return result
};

console.log(intToRoman(12))

