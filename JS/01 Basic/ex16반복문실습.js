// 1. 사용자로부터 시작 숫자와, 마지막 숫자를 입력받는다.
let num1 = Number(prompt('시작할 숫자를 입력하시오.'))
let num2 = Number(prompt('마지막 숫자를 입력하시오.'))
console.log(num1, num2);

// 2. 시작~마지막까지의 합을 구한다.
let total = 0;
for (let i = num1; i <= num2; i++) {
    total += i;
}
console.log(total);

// 3. 형태에 맞춰 출력해준다.
console.log(`${num1}부터 ${num2}까지의 합은? >> ${total}`);