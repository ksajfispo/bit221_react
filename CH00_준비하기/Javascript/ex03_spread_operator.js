/*
spread operator (전개구문)
'...' 펼침연산자
*/

// 배열 리터럴에서 전개
const arr1=[1,2];
const arr2=[3,4];
const arr3=[5,6, ...arr1, 7,8];
console.log(arr3);

// 객체 리터럴에서 전개
 const obj1 ={name:'가나다'};
 const obj2 ={job:'학생'};

 const cloneObj = {...obj1, ...obj2};

 console.log(cloneObj);

 // 함수 호출에서 전개
 function sum(a,b,c){console.log(a+b+c)};

 const nm = [1, 2, 3];
 sum(...nm)

