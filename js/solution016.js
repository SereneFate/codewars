function findShort(s){
    let array= s.split(' ')
    let pain = array.map(x=> x=x.length)
    return Math.min(...pain)
  }
















//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

