const express = require('express')
const app = express();


app.get(`/api`, (req, res) => {
    res.send("Hello")
})

app.listen(8080, () => {
    console.log("server is running at 8080")
})