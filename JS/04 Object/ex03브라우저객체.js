// BOM(Browser Objext Model)
// 브라우저에서 제공하는 객체

// window : 브라우저객체 최상위(생략 가능), 브라우저 창 관련 기능
// open('http://www.naver.com', '네이버', 'width=500;height=500')

// location : 브라우저의 주소 관련 정보
console.log(location);
console.log('현재 주소 :',location.hrdf);

// 페이지 이동
// location.href = 'http://www.google.com';

// screen : 화면 해상도 정보 (너비, 높이)
console.log(screen);

// navigator : 현재 브라우저 정보 (버전, 이름, 위치 등)
console.log(navigator);

// history : 브라우저 이동 관련 기능 (뒤로, 앞으로)
// back() - 뒤로, forward() - 앞으로
// go(이동할 페이지 숫자)