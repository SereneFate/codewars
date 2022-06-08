function yep (string){
    let array = string.split(' ')
  
    for(let i =0;i>array.length;i++){
        let x=array[i]
        x.replace(x[0],"")
    }
    return array
    
}
console.log(yep('egg egg'))



// failed I guess