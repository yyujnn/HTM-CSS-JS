// 배열 함수
let nameList = ['김성록', '이경진', '이민혁', '정유진', '조인성'];
console.log(nameList);

// 1. 마지막 인덱스 데이터 추가 : push()
nameList.push('임경남');
console.log('마지막 추가', nameList);

// 2. 마지막 인덱스 데이터 삭제 : pop()
nameList.pop()
console.log('마지막 삭제', nameList);

// 3. 첫 번째 인덱스 데이터 추가 : unshift()
nameList.unshift('양세영');
console.log('첫 번째 추가', nameList);

// 4. 첫 번째 인덱스 데이터 삭제 : shift()
nameList.shift();
console.log('첫 번째 삭제', nameList);

// 5. 원하는 위치에 데이터 추가 또는 삭제 : splice(start, deleteCount, item1, item2)
// -> 추가 (1번부터 0개 삭제)
nameList.splice(1,0, '박매일', '강태우');
console.log('splice 추가', nameList);
// -> 삭제 (2번부터 2개 삭제)
nameList.splice(2,2);
console.log('splice 삭제', nameList);

