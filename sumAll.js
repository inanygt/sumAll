const sumAll = function(num1, num2) {
   let totalSum = 0;
   smallerValue = Math.min(num1,num2) 
   biggerValue = Math.max(num1,num2);
   for (let i = smallerValue; i <= biggerValue; i++) {
      totalSum = totalSum + i

   }
   return totalSum
};

// Do not edit below this line
module.exports = sumAll;



// 1. create a variable that will hold the sum
// 2. start with an initialValue / the lowest number
// 3. Assign the highest number
// 4. sort the number from low to high 
// 5. Start adding the next number with the sum untill you reath the highest number
// 6. return the sum 



