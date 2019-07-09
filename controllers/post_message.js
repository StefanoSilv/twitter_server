const db_message = require('../models/message')

module.exports = (req, res) =>{
	db_message.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
