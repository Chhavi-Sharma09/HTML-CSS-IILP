
// // //HOISTING (ONLY IN VAR: UNDEFINED)
// // //GLOBAL SCOPE
// // var a= 10;
// // console.log(a);
// // //LET
// // //BLOCK SCOPE
// // //console.log(b);
// // //referror-- lines after it wont run
// // //TDZ(temporal dead zone)
// // let b = 20;
// // console.log(b);
// // // {
// // // var a= "hi";
// // // console.log(a);
// // // let b = "hello";
// // // console.log(b);

// // // }
// // console.log(a);// hi
// // console.log(b);//20

// // const c = 30;
// // console.log(c);
// // c =50;
// //  console.log(c);//TYPEerror
//  //VAR DECLARE 3 WAYS-- VAR,CONST, LET
//  //NOW FUNCTION DECLARING
//  //STATIC FUNCTIONS:-----(5) SAME VALUES EVERYTIME
//  //1. NAMED FUNCTIONS
//  //a();
//  function a(){
//   console.log("HELL WORLD 1");
//   console.log("HELL WORLD 2");
//   console.log("HELL WORLD 3");
//   console.log("HELL WORLD 4");
//  }
//  a();
//  //2 FUNCTIONS EXPRESSION
//  //b();//type error
//  var b=function(){
//   console.log("fn exp");
//  }
//  b();
//  //3 ARROW FUNCTION
//  //c();//ref error
//  let c =()=>{
//   console.log("ARROW FN")
//  }
//  c();
// //4. CALL BACK FN (ANONYMOUS FN)
// //5. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// (function(){
//   console.log("IIFE AND CALLBACK")
// })();
// (()=>{//arrow fn can also be used
//   console.log("IIFE AND CALLBACK")
// })();
// function sumOfTwo(param1=2, param2=1){// parameters nd setting their default values 
//   console.log("value of parameter1", param1);
//   console.log("value of parameter2", param2);
//   console.log("SUM OF BOTH = ", param1+param2);
// }
// sumOfTwo(1,1);
// sumOfTwo(2,2);
// sumOfTwo();
// const arr = [1,2,3,"chhavi"];
// console.log(arr);
// console.log(arr[3]);
// arr.push("abc");// to add value to array at the end -- push operation
// console.log(arr);
// arr.pop(); // pop operation -- to remove  value from end of array 
// console.log(arr);
// arr.unshift("firstword");// first arr ke value add krne ke liye
// console.log(arr);
// arr.shift();// first se value htane ke liye 
// console.log(arr);
// // 8 no , ca2 only one ca , mse only 1 ..mse 2 time , quiz 25 no. lab mid assessment , end sem, project..team...50 no.100 no. total whole sem
// //deployment thorugh github , aws... 
// console.log(arr.length);
// // object -- key and value pair// key -- index 
// const obj = {
//   name: "chhavi",
//   email: "chhavi@gmail.com",
//   contact: 9099090,
//   info: {
//     address : "hooligan city",
//     sports : ["archery", "football"],
//   },
// };
// console.log(obj);
// console.log(obj.email);
// console.log(obj.info.sports[1]);
// console.log(obj.info);
const arr = [1,2,3,4,5,6,7,8,9];
//variable with a value ; condition ; inc/dec the variable
for ( let i = 0 ; i < arr.length ; i++){
  console.log("On index ", i , "Value is ", arr[i]);
}
for (let i = 1 ; i <= 10 ; i++){
  console.log("2*",i,"=",(2*i)); 
}
const newarr = arr.map((currentValue, index)=>{// map returns new array wihtout changing the orginial one
  console.log("On index" , index," value is " , currentValue );
  return currentValue*index;
});
console.log(arr);
console.log(newarr);
//== only value ,  ==== dataype plus value
//filter-- conditions 
const evenNo = arr.filter((currentValue, index)=> {
  return currentValue % 2 == 0;
});
console.log(evenNo);
const primeno = arr.filter((currentValue , index)=> {
  let count = 0;
  for (let i = 0 ; i <= currentValue ; i++){
    if(currentValue % i == 0){
      count++;
    }
  }
  if(count == 2){
  return currentValue }
});
console.log(primeno);
//reduce - single element
const sumofAll = arr.reduce((accumulator , currentValue , index)=>{
  return accumulator + currentValue;
}, 0);
console.log(sumofAll);





