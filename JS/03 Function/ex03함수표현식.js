// 함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조
// function() -> 익명 함수

const intro = function(){
    console.log('안녕하세요! 정유진입니다.👩🏻');

}

// 함수 호출
intro();

// 매개변수
const intro2 = function(name){
    console.log(`개발원에서 비주얼을 맡은 ${name}입니다. 😎`);
}
intro2('박매일');

// 매개변수 + return문

const intro3 = function(name){
    return(`개발원에서 귀여움을 맡은 ${name}입니다. 🥰`);
}
intro3('임경남'); // 출력X
console.log(intro3('임경남'));