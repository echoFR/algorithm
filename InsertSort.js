// 简单插入排序

// 已排序区间 和 未排序区间
function InsertSort(arr) {
    const len = arr.length
    // 当数组只有一个元素时
    if(len<=1){
        return arr
    }
    // 从下标1开始 
     for (let i=1;i<len;i++){
        let value= arr[i]
        let j= i-1
        // 与已排序区间比较
        for(;j>=0;j--){
            if(arr[j] > value){
                arr[j+1]= arr[j]
            }else{
                break
            }
        }
        // 把临时变量赋给不满足条件的后一个元素（外层for循环的当前元素）
        arr[j+1] = value
    }
    return arr
}

console.log(InsertSort([5, 7, 2, 9, 4, 1, 0, 5, 7]))
