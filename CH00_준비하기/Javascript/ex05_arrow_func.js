/**
 * 화살표 함수
 */

// map()과 ()=>{}
const ma = [
  'a',
  'sss',
  'ddd',
  'fffffff'
]
// 뒤에는 index 값이 나옴
ma.map((e,i)=>{
  console.log(e,i);
});

let newArr = ma.map((e,i)=>{
  return e.length * 2;
});

console.log(newArr);

// 회문
let pa =[
  '가나다',
  '라마바',
  '가가가',
  '나나나'
];
const contents = pa.filter((str)=>{
  if(str===str.split('').reverse('').join('')){
  // split 으로 자르고 reverse로 뒤집이서 join으로 합침
  return str;
}
});
console.log(contents);
