const express = require('express')
const router = express.Router()

const { users } = require('../controller/auth')

router.get(`/users`, users)

module.exports = router;