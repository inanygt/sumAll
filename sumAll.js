const sumAll = function(num1, num2) {
   let totalSum = 0;
   let error = "ERROR"
   smallerValue = Math.min(num1,num2); 
   biggerValue = Math.max(num1,num2);
   if ((smallerValue < 0 || biggerValue < 0) || 
   (!Number.isInteger(num1) || (!Number.isInteger(num2))) ) 
   {
      return error;
   } else {
      for (let i = smallerValue; i <= biggerValue; i++) {
      totalSum = totalSum + i

   }
   }
   
   return totalSum
};

// Do not edit below this line
module.exports = sumAll;



