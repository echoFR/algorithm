// 选择排序

// 找到最小的  最替换操作 
function SelectSort(arr) {
    const len = arr.length
    // 遍历所有的数
    for (let i = 0; i < len; i++) {
        let minIndex = i
        // min= arr[i]
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
                // 记录最小数的下标
            }
        }
        // 如果最小的数 和当前遍历数的下标i不一致，进行交换
        if (i !== minIndex) {
            let value = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = value
        }
    }

    return arr
}

console.log(SelectSort([4, 6, 3, 1, 7]))