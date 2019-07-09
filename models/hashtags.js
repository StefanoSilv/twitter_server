const db = require('../db')

const db_hashtags = db.model('hashtags', {
	name: String
})

module.exports = db_hashtags
