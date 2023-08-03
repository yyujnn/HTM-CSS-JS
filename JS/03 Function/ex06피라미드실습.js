// 이모티콘, 행 개수 입력
let emoji = prompt('이모티콘 입력하세요.');
let row = Number(prompt('출력할 행의 개수를 입력하세요.'));

// 1. 함수 선언문 -> pyramid1
function pyramid1(emoji, row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j <= i; j++) {
            document.write(emoji);
        }
        document.write('<br>')
    }
}

// 2. 함수 표현식 -> pyramid2
const pyramid2 = function(emoji, row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j <= i; j++) {
            document.write(emoji);
        }
        document.write('<br>')
    }
}

// 2. 화살표 함수 -> pyramid3
const pyramid3 = (emoji, row)=>{
    for (let i = 0; i < row; i++) {
        for (let j = 0; j <= i; j++) {
            document.write(emoji);
        }
        document.write('<br>')
    }
}


// 함수 호출 시 출력
pyramid1(emoji, row);
pyramid2(emoji, row);
pyramid3(emoji, row);

