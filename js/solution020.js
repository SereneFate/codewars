function isTriangle(a,b,c)
{
   let whoBig=[a,b,c].sort((z,x)=>x-z)
   console.log(whoBig)
   return  whoBig[2]+whoBig[1] > whoBig[0]? true : false
}


// DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

