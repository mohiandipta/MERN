const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')

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