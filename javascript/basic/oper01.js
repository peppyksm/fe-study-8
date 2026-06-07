//operator 연산자

let x = 10;
let y = 10;
let z = '10';

console.log(x + y);
console.log(x - y);

console.log(x + z); //문자열로 출력

console.log(2 ** 4); //2*2*2*2 = 16 거듭제곱 2의 4승

//== ===
//== 값이 같은가
//=== 값 + 타입이 같은가

console.log(x == y);
console.log(x == z);

console.log(x === y);
console.log(x === z);

console.log(x > 5 && y > 0);
console.log(x == 1 || y === '10');


let q = 10;
let w = '20';
let e = 30;

console.log(q + e);
console.log(q + w + e);

//타입변환
//String()  == 문자타입으로 변환
//Number()  == 숫자타입으로 변환

console.log(q + String(e));
console.log(q + Number(w) + e);

console.log(Number('11254125'));
console.log(Number('11254125.23234'));

if (q == 10) {
    console.log('q가 10이더라');
}

//&& 연산
q == 11 && console.log('&& 11 확인 출력')
q == 10 && console.log('&& 10 확인 출력')

//true && true
//false || true

console.log( 10 == 10.0 );
console.log( 10 === 10.0 );
console.log( Number(10) === Number(10.0) );
//숫자형이면 정수 실수 상관없이 타입이 같음 (다 Number 형식임)