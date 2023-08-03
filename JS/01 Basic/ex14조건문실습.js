// 1. 사용자로부터 색상을 입력받는다.
let color = prompt('색상을 입력해주세요(빨강, 초록, 파랑)');

// 2. 조건에 따라서 배경색을 지정해준다.
//    빨강 -> red, 초록 -> green, 파랑 -> blue
//    그외 -> 잘못 입력하였습니다 ** 알림팝업창으로
// if(color=='빨강'){
//     document.querySelector('body').style.backgroundColor = 'red';
// }else if(color == '초록'){
//     document.querySelector('body').style.backgroundColor = 'green';
// }else if(color == '파랑'){
//     document.querySelector('body').style.backgroundColor = 'blue';
// }else{
//     alert('잘못 입력하였습니다.')
// }

let result = '';
switch(color){
    case '빨강' : result = 'red'; break;
    case '초록' : result = 'green'; break;
    case '파랑' : result = 'blue'; break;
    default : alert('잘못 입력하였습니다.');
}
document.querySelector('body').style.backgroundColor=result;