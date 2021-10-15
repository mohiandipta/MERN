const express = require('express')
const app = express()

let file = ({
    user: {
        name: "Mohian",
        Work: {
            company: "Akij Group",
            Designation: "Software Developer"
        }
    }
})

app.get(`/api`, (req, res) => {
    res.json(file);
})

app.listen(3000, () => {
    console.log('Server is running  at http://localhost:3000')
})