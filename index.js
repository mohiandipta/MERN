const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

// db connection
mongoose.connect("mongodb+srv://mohiandipta:12345@cluster0.mbto5.mongodb.net/mern?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        dbName: 'mern'
    })
    .then(() => {
        console.log('database connection is ready')
    })
    .catch((err) => {
        console.log('database can not be connected')
    })


// using middleWare
app.use(cors());
app.use(morgan("dev"))

// routers
const authRoutes = require('./routes/auth')

// routes middleware
app.use("/api", authRoutes)

app.listen(8080, () => {
    console.log("server is running at 8080")
})