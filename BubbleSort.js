
// 冒泡排序
function BubbleSort(arr) {
    const len = arr.length
    //共需要比较n-1趟
    for (let i = 0; i < len - 1; i++) {
        // 控制比较的次数
        // 后面的比较过了  就不再比较
        for (let j = 0; j < len - 1 - i; j++) {
            // 如果倒序做交换  否则不做任何操作
            if(arr[j] > arr[j+1]){
                let temp= arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp
            }
        }
    }
    return arr
}

console.log(BubbleSort([5,7,2,9,4,1,0,5,7]))