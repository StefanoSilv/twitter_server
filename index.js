const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

//It gives access to the body of the request that we can send to the database by Postman
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())


require('./db.js')

//Api for messages
app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_message'))

//Api for hashtags
app.get('/api/hashtags', require('./controllers/get_hashtags'))
app.post('/api/hashtags', require('./controllers/post_hashtag'))

//Api for users
app.get('/api/users', require('./controllers/get_users'))







app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
