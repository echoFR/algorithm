function Power(base, exponent)
{
    let res= 1
    let ci= exponent < 0 ? -exponent: exponent
    for(let i=0;i<ci;i++){
        res*= base
    }
    if(exponent < 0){
        res= 1/res
    }
    
    return res
}

console.log(Power(2,-2))

