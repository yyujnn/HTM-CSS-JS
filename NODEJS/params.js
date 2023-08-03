// parameter 통해 요청 
// GET : params, query 
// POST : params, body

const express = require('express')
const app = express()
const port = 3000


app.get('/user/:id', (req, res) => {
    // 1) params
    // const q = req.params
    // console.log(q)

    // 2) query
    const q = req.query 
    console.log(q);
    // user/asdf?q=yujin&name=yu&age=24 주소창

    console.log(q.q);
    console.log(q.name);
    console.log(q.age);

    res.json({ 'userid': q.name })
})
// user/yujin 주소창 --> {id : 'yujin'}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})