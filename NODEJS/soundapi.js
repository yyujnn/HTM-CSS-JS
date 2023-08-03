 // 요청에 따라 다른 json 데이터 돌려주는 api

const express = require('express')
const app = express()
const port = 3000

// cors 설정
var cors = require('cors')
app.use(cors())

// cors 오류 해소 해주어야함
// cors의 역할 : HTML 의 요청을 응답이 잘 되도록 해줌 (모든 요청 응답)

// HTML --요청(Request)--> node express 
// HTML <--응답(Response)-- node express 


app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    // const p -> p.name
    // 대신 { key } 사용하면 더욱 간단 

    console.log(name);
    if (name == "dog") {
        res.json({ 'sound': '멍멍' })
    } else if (name == "cat") {
        res.json({ 'sound': '야옹' })
    } else if (name == "rok") {
        res.json({ 'sound': '꿀꿀' })
    }else{
        res.json({ 'sound': '알 수 없음' })
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})