// 호이스팅 : 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 현상

// 소스코드 처리 과정 : 평가 -> 실행
// 평가 : 모든 선언문(변수, 함수 등) 등록
// 소스코드 실행(런타임)

// 변수 호이스팅
// console.log(lunchMenu);
// undefined -> 선언o, 할당x
var lunchMenu = '카레돈가스';
console.log(lunchMenu);
console.log(divverMenu);
// ~is not defiend -> 선언x, 할당x



// 함수 호이스팅
decFunc('위 : ');
// expFunc('위 :');
function decFunc(val){
    console.log(val, '함수 선언문');
}
const expFunc = function(val){
    console.log(val, '함수 표현식');
}
decFunc('아래 :');
expFunc('아래 :');


