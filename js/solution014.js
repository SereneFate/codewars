function yep (string){
    let array = string.split(' ')
  
    for(let i =0;i>array.length;i++){
        
     array[i].replace(array[i][0],array[i][0].toUpperCase())
    }
    return array
    
}
console.log(yep('egg egg egg'))



// failed I guess