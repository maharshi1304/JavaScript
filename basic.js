// console.log("first");
// console.log(1);
// console.log(true);
// console.log(undefined);
// console.log(null);

// var name;// deceleration
// var age = 30;// initialization
// var isEmployed = true;// declaration and initialization
// name = "John Doe";// initialization
// console.log(name)
// console.log(age)
// console.log(isEmployed)

// var a
// var a

// a = 10
//console.log(a)

// let b = 10
// let b = 10

// let a = 10
// a = 20
// console.log(a)

// const  c  = 10
// c = "maharshi"

// Data types 
// String
// let str = "My Name is ABc"
//  console.log(str)
//  console.log(typeof(str))

//  let newstr = str.toLowerCase()

//  console.log(str.toUpperCase())

//  console.log(str.length)// 14

//  console.log(str.charAt(5))

 //console.log(str[13]) // c
 //console.log(str[str.length - 1])

//   let str = "alakazam"
//   let newvalue = a.replaceAll("a", "o")
//   console.log(a, newvalue)
//   console.log(a)
//   console.log(newvalue)

//console.log(str.replaceAll("a", "o"))

// let str= " qwertyuiop"
// console.log(str.includes("T"))
// console.log(str.includes("t"))
// console.log(str.concat(" hee"))
// console.log(str.concat("  ").concat("hee"))

// console.log(str.indexOf("q"))
// console.log(str.indexOf("qwz"))


// let str = "I am learning javascript"
// console.log(str.slice(7))
// console.log(str.slice(7, 20))
// console.log(str.slice(-5))
// console.log(str.slice(-8, -5))

// Type casting--
// let str = "7819"
// console.log(typeof(str))
// let num = Number(str)
// console.log(typeof(num))
// console.log(str, num)

// Operators-- Arithmetic--
//let val1 =12
//let val2 = 37
// let ans = val1+ val2
// console.log(ans)

//  let ans2 = val1 / val2
//  console.log(ans2)

// let ans3 = 2 ** 6//  power 2^6
// console.log(ans3)

//  let ans4 = 216 ** (1/3) // square root of 49
//  console.log(ans4)

//Uranary opertators
  // let a = 1  
  //  a++
  //  ++a
  //  console.log(a) 

// let a =1
// console.log(a--)
// console.log(--a)
// console.log(a)

// let a1 = 10

//  let b = ++a1
// console.log(a1)

// let a = 10
// let b = 20
// console.log(a===b)

// Comparison operatrors--
// let c = 10
// let d = "10"
// console.log(c==d)
// console.log(c===d)
// console.log(c!=d)
// console.log(c!==d)

// let a = 10
// let b = 10

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

//logical operators--
// let a = 10
// let b = 20
// console.log(a <b && a > b)
// console.log(a <b || a > b)

// // short circuiting
// true && console.log("okay")
// false && console.log("okay")

// Asssignment opearttors

// let a = 10
//  a+= 6
//  a-= 6
//     a*= 6
//     a/= 6
//     a%= 6
//     a**= 6
//  console.log(a)

//  console.log(5-10/2 + 5 * 3)// Precedence Rules

//  console.log(10 + "10") // Implicitly type conversion
//  console.log(10 + 10 + "10")
//  console.log("10" + 10 + 10)
//  console.log(10 + "10" + 10)
//  console.log("10"+10+"10")

//  console.log(true + 10)
//  console.log(true + true)
//  console.log(true + 10 + "10")
//  console.log(true + " " + true)//
//  console.log(1 + true + " 1")// 2 1

//  console.log("1"+ true + 1) // 1true1
//  console.log("1" + 1 + true) // 11true

// Conditional statements--

// let age = Number(prompt("Enter a age"))

// if(age > 18){
//    console.log("okay");
// }

// let num = prompt("enter a num")

// if(num % 5 == 0 ){
//   console.log("divisible by 5");
// }
// else{
//   console.log("not divisible by 5");
// }

// let num = prompt("enter a num")

// if(num % 2 == 0 ){
//   console.log(" number is even");
// }
// else{
//   console.log(" number is odd");
// }

// 

// l

// let P = Number(prompt("enter P marks")) ;
// let C = Number(prompt("enter C marks")) ;
// let M = Number(prompt("enter M marks")) ;
// let E = Number(prompt("enter E marks")) ;
// let b = Number(prompt("enter B marks")) ;


// let average = (P+C+M+E+B)/5;
// console.log(average);
// if( average >= 91 && average <= 100){
//   console.log("A");
// }
// else if( average >= 81 && average <= 90){
//   console.log("B");
// }

// else if(average >= 71 && average <= 80){
//    console.log("C");
// }
// else if(average >= 61 && average <= 70){
//   console.log("D");
// }
// else{
//   console.log("fail");
// }

// Find greatest num amomg 3 
// let n1 = prompt("n1")
// let n2 = prompt("n2")
// let n3 = prompt("n3")

// if(n1 > n2 && n1 > n3){
//   console.log(n1)
// }
// else if( n2 > n1 && n2 > n3){
//   console.log(n2);
// }
// else{
//   console.log("final greatest is:"+ n3 );
// }

// Convert Celcius to Farenhite
// let Cel = prompt("Celcius")

// let F = (Cel * 9/5) + 32;
// console.log(F);

// Make Calculator--

// Check Year is leap or not--
// let year = Number(prompt("Enter year"))

// if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//    console.log("leap year");
// }
// else{
//    console.log("not leap year");
// }

// print week days-- from user  input
// let num = Number(prompt("Enter a number"))
// if(num == 1){
//   console.log("monday");
// }
// else if(num == 2){
//   console.log("tuesday");
// }

// else if(num == 3){
//   console.log("wednesday");
// }
// else if(num == 4){
//   console.log("thursday");
// }
// else if(num == 5){
//   console.log("friday");
// }
// else if(num == 6){
//   console.log("saturday");
// }
// else if(num == 7){
//   console.log("sunday");
// }


// Check days in month--
// let month = (prompt("Enter a month"))

//  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//   console.log("31 days");
// } 
//  if (month == 4 || month == 6 || month == 9 || month == 11){
//   console.log("30 days");
// }
// else if(month == 2){
//   console.log("28 days");
// }
// else{
//   console.log("invalid month");
// }


// let num = Prompt("Enter a number")

// if(num<0){

//   if(num % 2 == 0){
//     console.log("negative even");
//    }
//    else{
//     console.log("negative odd");
//    }
// }
// else if(num > 0){
//   if(num % 2 == 0){
//     console.log("positive even");
//    }
//    else{
//     console.log("positive odd");
//    }
// }
// else{
//   console.log("zero");
// }

// Q1  
// let age = Number(prompt("Enter a age"))
// let gender = prompt("Enter your gender (M/F)")
// if(gender === "F"){
//   if(age >=18){
//     //console.log("entry yes");
//     alert("entry yes");
// }
// else{
//   //console.log("entry no");
//   alert("entry no");
// }
// }
// else if(gender === "M"){
//   if(age >= 22){
//     //console.log("entry yes");
//     alert("entry yes");
// }
// else{
//   //console.log("entry no");
//   alert("entry no");
// }
// }

// Ternary Operator--
// let age = Number(prompt("Enter a age"))
// age >= 1 && age <= 12 ? console.log("child") :
// age >= 13 && age <= 19 ? console.log("teenager") :
// age >= 20 && age <= 59 ? console.log("adult") :
// age >= 60 ? console.log("senior citizen") :
// console.log("invalid age");

// // Check even or odd
//  let num = Number(prompt("Enter a number"))
//   num % 2 == 0 ? console.log("even") : console.log("odd");
// // Check positive or negative
//  let num1= Number(prompt("Enter a number"))
//  num > 0? console.log("positive") : num < 0 ? console.log("negative") : console.log("zero");
// // Check leap year
//   let year = Number(prompt("Enter a year"))
//   (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? console.log("leap year") : console.log("not leap year");


// let m1 = (prompt("Enter m1 marks"))
// // let m2 = Number(prompt("Enter m2 marks"))
// // let m3 = Number(prompt("Enter m3 marks"))
// // let m4 = Number(prompt("Enter m4 marks"))
// // let m5 = Number(prompt("Enter m5 marks"))

// m1 >=91 && m1 <= 100 ? console.log("A") :
// (m1 >=81 && m1 < 91)? console.log("B") :
// (m1 >=71 && m1 < 81) ? console.log("C") :
// (m1 >=61 && m1 < 71) ? console.log("D") :
// (m1 < 60) ? console.log("fail"):console.log("Invalid marks");

// using Ternary Operator Print greater number--
// let n1 = Number(prompt("Enter n1"))
// let n2 = Number(prompt("Enter n2"))

// n1 > n2 ? console.log("n1 is greater") : console.log("n2 is greater");


// using ternary operator check if number is even or odd
// let num = (prompt("Enter a number"))
// //num % 2 == 0 ? console.log("even") : console.log("odd");
// //num % 2 == 0 ? alert("even") : alert("odd");
// num < 0 ? (num % 2 == 0) ? alert("negative even") : alert("negative odd") :
// num > 0 ? (num % 2 == 0) ? alert("positive even") : alert("positive odd") : alert("zero");

// // print week days-- from user  input

// let days = Number(prompt("Enter a Day"))

// switch(days){
//   case 1: 
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//       console.log("Friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//     default:
//       console.log("invalid dyas");
        
//  }

// Check days in month using switch case--
  // let months = Number(prompt("Enter a month"))

  // switch(months){
  //   case 1:
  //   case 3:
  //   case 5:
  //   case 7:
  //   case 8:
  //   case 10:
  //   case 12:
  //     console.log("31 days");
  //     break;
  //   case 4:
  //   case 6:
  //   case 9:
  //   case 11:
  //     console.log("30 days");
  //     break;
  //   case 2:
  //     console.log("28 days");
  //     break;
  //   default:
  //     console.log("invalid month");  
  // }

  // Check grade using switch case--
  // let range = Number(prompt("Enter number in range"))

  // switch(true){
  //   case (range > 90 && range<= 100):
  //     console.log("A");
  //     break;
  //   case (range > 80 && range <= 90):
  //     console.log("B");
  //     break;
  //   case (range > 70 && range <= 80):
  //     console.log("C");
  //     break;
  //   case (range > 60 && range <= 70):
  //     console.log("D");
  //     break;
  //   case (range < 60 && range >= 0): 
  //   console.log("fail");
  //   break;

  //   default:
  //     console.log("invalid range");
  
  // }

  // Check number is even or odd using switch case--
  let num = Number(prompt("Enter a number"))
  switch(true){
    case (num % 2 === 0 && num < 0):
      console.log("negative even");
      break;
    case (num % 2 === 0 && num > 0):
      console.log("positive even");
      break;
    case (num % 2 !== 0 && num < 0):
      console.log("negative odd");
      break;
    case (num % 2 !== 0 && num > 0):
      console.log("positive odd");
      break;
    default:
      console.log("zero");
  
  }

  let num1 = Number(prompt("Enter a number"))
  switch(true){
     case (num1 % 2 === 0):
        console.log("even");
        break;
      case (num1 % 2 !== 0):
        console.log("odd");
        break;
      default:
        console.log("zero");
  }


