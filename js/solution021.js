function stray(numbers) {
    if(numbers[0]===numbers[numbers.length-1])  {
      return Number(numbers.filter(x=>x!==numbers[0]).join(''))
    }else{
      return Number(numbers.filter(x=>x!==numbers[1]).join(''))
    }
     
  }
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3