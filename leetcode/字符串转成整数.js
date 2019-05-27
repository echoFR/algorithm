/**
 * @param {string} str
 * @return {number}
 */

// JS可以利用parseInt() 
var myAtoi = function (str) {

    let parse= parseInt(str)
    if(isNaN(parse)) return 0
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    if (parse > max) {
        return max
    }
    if (parse < min) {
        return min
    }
    return parse
};

console.log(myAtoi("0-1"))