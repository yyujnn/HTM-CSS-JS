
// express 예제 코드
// --> http://localhost:3000/ 접속해서 확인 가능
// --> 서버 끄는 명령어 : Ctrl + c

/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) 
*/


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// HTTML 메소드 ==> '/' : 라우팅, ()=>{} : 콜백함수(끝나고 실행할 함수)
// HTTP 메소드 : 요청의 목적, 종류를 알리는 수단
// 요청 방식 Get ,Post 

app.get('/dog', (req, res) => {
    res.json({'sound':'멍멍'})
    // json 형태 자료 (send로 해도 됨)
})
// 라우팅 get방식으로: http://localhost:3000/dog 

app.get('/cat', (req, res) => {
    res.send('<h1>고양이 😻<h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// --> port 번호 listen