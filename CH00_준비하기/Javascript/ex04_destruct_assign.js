/*
  Destructing assign
*/

let a,b,reest;

[a,b] = [10,20];
[a,b, ...reest] = [10,20,30,40,50];
console.log(reest);

// 객체 구조 분해
const c = {p:42, q:true};
let {p,q} = c;
