//javascript

console.log('basic01.js');
console.log('text');

//변수 선언
//var let const 

//변수 선언 : let    모든 데이터형식이 모두 let으로 
let a = 10;
let b = 20.123;
let c = "안녕하세요";
let d = '작은따옴표';
let e = true;
let f = false;

//상수 선언 : const
const g = 30;
const h = "헬로우";

a = 20;
//g = 50;  //상수형이어서 변경 불가능

console.log('abc');
console.log("abc");
console.log('작은따옴표 "안녕" ㅎㅎ');
console.log("큰따옴표 '안녕' ㅎㅎ");
console.log("큰따옴표 '안녕' \"ㅎㅎ\"");

let x = 20;
let y;

console.log(x);
console.log(y);  //undefined 정의되지 않음

z = 50; //변수타입 입력 안해도 알아서 출력됨
console.log(z); //오류 발생 위험성 높으므로 사용 안하는게 좋음

//let z = 30; 중복변수명이므로 오류
//console.log(z);

var z = 30;
console.log(z);
var z = 20;
console.log(z);   
//문제 발생 리스크 높음 ---var   =>   let