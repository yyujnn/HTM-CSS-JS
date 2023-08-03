// 1. 값이 '100'과 200인 num1과 num2를 생성한다.
let num1 = '100';
let num2 = 200;

// 2. num1과 num2의 값을 구한다.
let sum = Number(num1)+num2;

// 3. 형태에 맞춰서 출력해준다.
// console.log(num1+'과 '+num2+'의 합 >> '+sum);
console.log(`${num1}과 ${num2}의 합 >> ${sum}`);

// Template Literals(템플릿 리터럴) -> 백틱(`) : 숫자 1 왼쪽 키보드
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능을 제공
let userName='정유진';
console.log(`안녕하세요. 
반갑습니다.`);
console.log(`${userName}님 환영합니다.`);

