const express = require('express')
const app = express();

// using middleWare for CORS
const myMiddleWare = (req, res, next) => {
    console.log('MiddleWare  Applied!')
    next();
}
app.use(myMiddleWare);

let user = {
    name: 'Mohian',
    Age: 23,
    Company: 'Akij',
    Salary: '20,000'
}

app.get(`/api`, (req, res) => {
    res.json(user)
})

app.listen(8080, () => {
    console.log("server is running at 8080")
})