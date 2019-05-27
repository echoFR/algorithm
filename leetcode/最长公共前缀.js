var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    let re = ''
    strs.sort()
    let l = strs[0].length < strs[strs.length-1].length ? strs[0].length : strs[strs.length-1].length
    for(let i = 0; i < l; i++){
        if(strs[0][i] === strs[strs.length-1][i]){
           re += strs[0][i]
           } else {
               break
           }
    }
    return re
};