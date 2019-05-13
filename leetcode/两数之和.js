// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 遍历每个元素 xx，并查找是否存在一个值与 target - xtarget−x 相等的目标元素。
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i]
    let index = nums.indexOf(other)
    if (index !== -1 && index !== i) {
      return [i, index]
    }
  }
  return -1
};

nums = [2, 7, 11, 15], target = 9

console.log(twoSum(nums, target))