
// While loop--

// let  count  = 1;
// while(count <=5){
//     console.log("Hello World");
// }

// console.log("pura code ho gaya");

// while(true){
//     console.log("okay"); 
// }


/*Print 1 to n using while loop
let num = Number(prompt("Enter a number"));
let start = 1;

while( start <= num){
    console.log(start);
    start++;
}
    */

/* print number in one line
let n = 5
let start = 1
let str = " "
while(start<=n){
    str+= start + " "
    start++;
}
console.log(str);
*/


/*Print n to 1 using while loop
let num = Number(prompt("Enter a number"));
let start = 1;

while( num >=start ){
    console.log(num);
    num--;
}
    */

/*Print  1  to n odd numbers using while loop
let num = Number(prompt("Enter a number"))
let start = 1;
while (start <= num){
    if(start % 2 != 0){
        console.log(start);// print odd numbers
    }
    start++;
}
*/

/* Count Total Odd Number 1 to n & Print Each odd number
let n = 5
let start = 1
 let count = 0
while(start<=n){
   if(start %2 !== 0){
       //console.log(start);
        count++;
       console.log(start)
   }
    start++;
}
console.log("total odd num count 1 to 5 is " + count)
*/

/* Another way to solve 1 to n number
let num = Number(prompt("Enter a number"))
let start = 1;
while(start<= num){
 console.log(start);// print all numbers
 start+= 2;
}
 */

/*Print n to 1 even numbers using while loop
let n = Number(prompt("Enter a number"))
let i = 1;
while (n >= i){
    if(n%2 === 0){
        console.log(n);// print even numbers
    }
     n--;
}
 */

/* Print Even num taking input from users--
let start = Number(prompt("Enter a number"));
let end = Number(prompt("Enter a number"));

while(start <= end){
    if(start % 2 === 0){
        console.log(start);
    }
    start++;
}
*/

/*print fizz, buzz, fizzbuzz otherwise print number
let i = Number(prompt("Enter a number"));
let end = Number(prompt("Enter a number"));

while(i <= end){
    if(i %3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if( i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
    i++;
}
    */
   
/*Print star pattern using while loop Right angle triangle
let n = 5
let i = 1;
while(i <= n){
    console.log("* ".repeat(i));
    i++;
// } 
    */

/* Print Star(*) in one line
let n = 5
let start = 1
let str =" "
while(start<= n){
    str += " * "
    start++;
}
console.log(str);
*/

/* Print Given Num from last
let n = 93542
while(n > 0){
    let lastdigit = n % 10;
    console.log(lastdigit);
    n = Math.floor(n / 10);// remove last digit using Math.floor to round down in single digit
}
    */


/* Another way to print digit from last
 let n = 93542
 let str = String(n);
 let idx =  str.length - 1;

 while(idx >= 0){
    console.log(str[idx]);
    idx--;
 }
    */

 /*
 let n = 93542
 let str = String(n);
    let idx = 0;
    while(idx < str.length){ 
        console.log(str[idx]);
        idx++;
    }
*/


/*do while loop--
//fizz, buzz, fizzbuzz otherwise print number using do while loop 
let i = Number(prompt("Enter a number"));
let end = Number(prompt("Enter a number"));
do{
     if(i %3 === 0 && i % 5 === 0){
         console.log("FizzBuzz");
     }
       else if( i % 3 === 0){
          console.log("fizz");

       }else if(i % 5 === 0){
            console.log("buzz");
         } 
         else{
             console.log(i);
         }
         i++;
}
while(i <= end);
*/


/* for loop concepts---
let  n1 = 10
for(let i = 1; i<=10; i++){
   console.log(i);
} 
   */

/*Print n to 1 using for loop
 for(let i = 10; i >= 1; i--){
     console.log(i);
   }
*/

/*Print n to 1 even numbers using for loop
  let n = 10
  for(let i  = n; i>= 1; i--){ 
   if(i%2 === 0){
      console.log(i);
   }
  }
      */


/*fizz, buzz, fizzbuzz otherwise print number using for loop
 let i = Number(prompt("Enter a number"));
let end = Number(prompt("Enter a number"));// 
for(let i = 1; i <= end; i++){
     if(i %3 === 0 && i % 5 === 0){

       console.log("FizzBuzz");
   }
        else if( i % 3 === 0){
         console.log("fizz");
     }else if(i % 5 === 0){ 
            console.log("buzz");
      }
         else{
               console.log(i);
         }
        
}
 */



/*Print number b/w start to end using for loop
 let start = Number(prompt("Enter starting  a number"));
let end = Number(prompt("Enter ending a number"));
 for(let i = start ; i <= end; i++){
    console.log(i);
 }
    */


/*Print Number reverse from end to start order using for loop
let start = Number(prompt("Enter starting  a number"));
let end = Number(prompt("Enter ending a number"));
for(let i = end; i >= start; i--){
    console.log(i);
}
*/


/*Print  simple star(*) pattern in single line using for loop
let n = 5
let str = " "
 for(let i = 1; i <= n; i++){
     str += "*"
    }
      console.log(str);
*/      


/* Print star(*)
let n = 5
let str = " "
 for(let i = 1; i <= n; i++){
     str += "*\n "
    }
      console.log(str);
*/
// Print artmstrong number using for loop
 //let n = Number(prompt("Enter a number"));
   

/*Print String reverse using while loop
 let str = "qwertyuiop"
 let start = str.length - 1;
   let ans = " ";
   while(start >=0){
       ans += str[start];
       start--

   }
   console.log(ans);
*/


/*  Another way reverse string
   let str = "atul";
   let start = 0;
   let ans =" ";
   while(start < str.length){
       ans += str[start] + ans ;
       start++;
   }
   console.log(ans);
*/

/* Another way reverse  String using for loop
let str = "mahi"
let rev = ""
for(let i = 0; i < str.length; i++){
    rev+= str[i] 
}
 console.log(rev);
*/

/* Best  way reverse  of  String using for loop
let str = "mahi"
let rev = ""
for(let i = str.length-1; i>=0; i--){
    rev+= str[i]
}
console.log(rev)

/* Print table of 22
let n = 22
for(let i = 1; i<=10; i++){
    console.log(n + " X " + i + "=" + n * i );
}
    */


/* Print sum n natural number using for loop
let n = 101
let sum = 0

for(let i = 1; i<=101; i++){
    sum+= i;
}
console.log(sum);

*/

/* calculate some of all no divisible by 5
let n = Number(prompt("Enter a number divisible by 5"))

let sum = 0
for(let i = 1; i<= n; i++){
    if(i % 5 == 0){
        sum+= i;
    }
}
console.log("Sum of num which divisible by 5 is " + sum1);
*/


/* Another way to solve sum of num divisible by 5
let n = Number(prompt("Emter a number"))

let sum = 0
for(let i = 5 ; i<=n; i+=5){
sum+= i;
}
console.log("sum is " + sum)

*/


/* Count or frequency  Character from string
 let str = "missisipi"
 let target = 'i'
 let count = 0
 for(let i = 0; i<str.length; i++){
    if(str[i]== target){
        count++;
    }
}
console.log("count of i is " + count);

*/ 

/*Check palindrome string or not 
  let str = "nitin"
  let reverseStr = ""

//   for(let i = str.length-1; i>=0; i--){
//     reverseStr+= str[i]
//   }

 for(let i =0; i<str.length; i++){
    reverseStr = str[i] + reverseStr
 }

  if(reverseStr == str){
    console.log("string is palindrome : " + true)
  }
  else{
    console.log("string is not palindrome : " + false)
  }
*/


/* factorial of n
 let  n = Number(prompt("Enter a number"))

 let fact = 1
 for(let i = 1; i<=n ; i++){
    fact = fact * i;
 }
 console.log("factorial of n is " + fact);

*/

/* Check prime or not 

 let n = 51
 let isPrime = true

 for(let i = 2; i<=n; i++){
    if(n % i == 0){

        isPrime = false
        break;
    }
 }
  if(isPrime == true) {console.log("prime number");

  } else{
    console.log("not prime number");
  }

  */



/*Count Even Or Odd b/w range 1 to n 

 let n = 100
 let Evncount = " "
 let Oddcount = " "

 for(let i = 1; i<=n; i++){
    if(i % 2 == 0){
        Evncount++;
    }
    else{
        Oddcount++;
    }
 }
  console.log(Evncount);
  console.log(Oddcount);

  */  
 

/* Print Table of 12

let n = 12
for(let i = 1; i<=n; i++){
    console.log(n + " x " + i + " = " + n * i);
}

*/