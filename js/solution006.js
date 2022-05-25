function squareDigits(num){
    let pain= num.toString().split('')
    let noPain= pain.map(x=>Number(x))
     return noPain.reduce((full,add)=>Number(full+(Math.pow((add),2).toString())),0)
  }
  