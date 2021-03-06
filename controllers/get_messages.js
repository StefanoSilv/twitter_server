const db_message = require('../models/message')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.hashtag) {
		q.hashtag = req.query.hashtag
		console.log(req.query)
	}
	db_message.find(q).sort('-date').populate({
		path: 'author',
		select: 'name'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
