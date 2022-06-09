function getSum( a,b )
{
  let pain=[]
  if(a===b){
    return a
  }else if(a>b){
    let diff = Math.abs(a-b)
        for(let i=0;i<diff;i++){
      pain.unshift(a-i)
         console.log(pain)
         console.log(diff)
         
        
    }
    return pain.reduce((acc,curr)=>acc+curr) + a+b
        
  }else if(b>a){
    let diff = Math.abs(a-b)
    for(let i=0;i<diff;i++){
    pain.unshift(b-i)
     console.log(pain)
     console.log(i)
     
    
}
    return pain.reduce((acc,curr)=>acc+curr) + a+b
  }
}

console.log(getSum(100,1))