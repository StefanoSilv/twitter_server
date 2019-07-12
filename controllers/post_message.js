const db_message = require('../models/message')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			req.body.author = decoded._id
			db_message.create(req.body).then((data) => {
				res.send(data)
			}).catch((err) => {
				res.send(err)
			})
		}
	})
}
