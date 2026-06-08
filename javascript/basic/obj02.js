//Object 객체

//자바스크립트의 자료형          (Java Map 자료형 Map<Key, Value>)

let x = 10;    //단일 변수
let arr = [1, 2, 3, 4, 5]; //배열

console.log(arr[2]);
console.log(arr);

//객체
//{ key:value, key:value, key:value }
//인터넷 http 통신   데이터를 전달(주고받기)
//JSON : JavaScript Object Notation
//JAVA 자료형 MAP과 비슷

let weather = "맑음";


//객체
//key : value
let weatherInfo = {
    day : 260605,
    weather : "맑음",
    temperature : 5,
    location : "양재동"
};

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.weather);
console.log(weatherInfo.temperature);


//-------------------------------
// 점심식사 정보

let lunchInfo = {
    menu = "짜장면",
    price = "5000",
    shop : "대천반점",
    location : "시장내부"
}