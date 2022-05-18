function isPalindrome(param){
    let word= param.toString().split('').reverse().join('')
    
    
    if(word===param){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome('yep'))
