// 변수 : 데이터를 담을 공간
let num = 3;

// let -> 변수 선언 키워드
// num -> 변수 이름
// 3 -> 변수에 할당된 값

console.log(num);

// 재선언 : 같은 변수 이름으로 다시 변수를 선언하는 것 (변수 선언 키워드O)
// 재할당 : 선언된 변수에 다시 값을 할당하는 것(변수 선언 키워드X)

// 1. var : 재선언O, 재할당O
var var1 = 1;
console.log('var1 최초 선언', var1);
var var1 = 2;
console.log('var1 다시 선언', var1);
var1 = 3;
console.log('var1 값 업데이트', var1);

// 2. let : 재선언X, 재할당O
let let1 = 1;
console.log('let1 최초 선언', let1);
// let let1 = 2;
let1 = 2;
console.log('let1 값 업데이트', let1);

// 3. const : 재선언X, 재할당O
const con1 = 1;
console.log('con1 최초 선언', con1);
// const con1 = 2;
con1 = 2;
// console.log('con1 값 업데이트', con1);

// ✔ 변수 선언 시 주의 사항
// 변수명 첫 글자로는 영문자 사용 권장 ( $,_, 영문자만 올 수 있음)
// 예약어 사용 x
// 되도록 의미 부여