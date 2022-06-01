function getMiddle(s){
    let array= s.split('')
    let length = array.length
    if((length)%2==0){
      return `${array[length/2 - 1]+ array[length/2]}`
    }else if(length==1){
      return `${array[0]}`
    }else{
      return `${array[Math.floor(length/2)]}`
    }
  
  }
  




















// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"