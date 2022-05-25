function getCount(str) {
    let vowelsCount = 0;
    let array= str.split('')
    for(let letter of array){
      switch(letter){
          case 'a': vowelsCount+=1
          break;
           case 'e': vowelsCount+=1
          break;
           case 'i': vowelsCount+=1
          break;
           case 'o': vowelsCount+=1
          break;
           case 'u': vowelsCount+=1
          break;
         
      }
    }
    return vowelsCount;
  }



  