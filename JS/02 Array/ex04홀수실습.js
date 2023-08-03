// 1. 주어진 데이터를 담은 배열을 생성한다.
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2. 데이터에서 홀수인 숫자를 찾고 개수를 세준다.

// 홀수를 넣어줄 배열 
let oddList = [];
// 홀수 개수
let oddCnt = 0;

// for (let i of numList) {
//     // 홀수인지 판별
//     if (i % 2 == 1) {
//         oddList[oddCnt] = i;
//         oddCnt++;
//     }
// }

for (let i = 0; i < numList.length; i++) {
    // 홀수인지 판별
    if(numList[i]%2==1){
        oddList[oddCnt]=numList[i];
        oddCnt++;
    }

}
// 3. 형태에 맞춰 출력해준다.
alert(`list에 들어있는 홀수는 ${oddList}이며, 총 ${oddCnt}개 입니다.`);