const express = require('express')
const app = express();
const cors = require('cors')

// using middleWare for CORS
app.use(cors());

app.get(`/api/users`, (req, res) => {
    res.json({
        users: [
            {
                id: 1,
                name: 'Mohian',
                Age: 23,
                Company: 'Akij',
                Salary: '20,000'
            },
            {
                id: 2,
                name: 'Dip',
                Age: 17,
                Company: 'Student',
                Salary: 'N/A'
            }
        ]
    })
})

app.listen(8080, () => {
    console.log("server is running at 8080")
})