const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


require('./db.js')









app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
