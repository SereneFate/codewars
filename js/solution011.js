function XO(yep) {
    let str = yep.toLowerCase().split('')
    let X=0
    let O=0
      for(i=0;i<=str.length-1;i++){
        str[i]==='x'? X+=1 : X+=0;
        str[i]=== 'o'? O+=1 : O+=0;
      }
    if(X==O){
      return true
    }else{
      return false
    }
  }


//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
