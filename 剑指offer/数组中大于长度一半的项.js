// function MoreThanHalfNum_Solution(numbers)
// {
//     let obj={}
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i] in obj){
//             obj[numbers[i]]
//         }else{
//             obj[numbers[i]]= 1
//         }
//     }
//     for(let key in obj){
//         if(obj[key] > Math.floor(numbers.length/2)){
//             return key
//         }
//     }
//     return 0
// }


// 保存两个值：数组中的一个数字，次数
// 当遍历到下一个数字与之前保存的数字一样时，次数+1
// 不同时，次数-1
// 当次数为0时，保存下一个数字，并把次数设为1
// 要找的数字就是最后一次把次数设为1对应的数字

function MoreThanHalfNum_Solution(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  let value = numbers[0]
  let count = 1
  for (let i = 1; i < numbers.length; i++) {
    if (count === 0) {
      value = numbers[i]
      count = 1
    } else {
      if (numbers[i] !== value) {
        count--
      } else {
        count++
      }
    }
  }
  count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (value === numbers[i]) {
      count++
    }
  }

  if (count * 2 > numbers.length) {
    return value
  }
  return 0
}
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]))