// 1. 사용자로부터 숫자를 입력받는다.
let inputNum = Number(prompt('숫자를 입력해주세요'));
// console.log(inputNum);

// 2. 입력 받은 수를 가지고 연산을 통해 결과값을 얻는다.
//    (백의 자리 이하는 버림)
let resultNum = inputNum - inputNum%100;
// console.log(resultNum);

// 3. 결과값을 형태에 맞춰 출력한다.
//    백의 자리 이하 버린 결과 >> N00
console.log(`백의 자리 이하 버린 결과>> ${resultNum}`);
