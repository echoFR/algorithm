/**
 * @param {number} x
 * @return {number}
 */

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 2^31-1=2147483647,-2^31=-2147483648

var reverse = function (x) {
    let flag = x < 0 ? -1 : 1
    x = x < 0 ? -x : x
    let arr = x.toString().split('')
    let len = arr.length
    let i = 0
    let j = len - 1
    while (i < j) {
        if (arr[j] === 0) {
            arr.pop()
            j--
        } else {
            let t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    const max= Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)

    let res = flag * Number(arr.join(''))
    return res > max || res < -min ? 0 : res
}

console.log(reverse(1534236469))