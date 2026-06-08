// 반복문..

let scores = [10, 20, 30, 50];

console.log(scores);


//일반 for문
for(let i = 0; i < scores.length; i++){
    console.log(scores[i]);
}

//for in    index값 출력
for(let i in scores){
    console.log(i + " " + scores[i]);
}
//for of    데이터값 출력
for(let value of scores){
    console.log(value)
}

//forEach

scores.forEach( (value, index)=> {
    console.log( index + " " + value);
})