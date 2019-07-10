const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	db.findOne({email: req.body.email}).then( (user) => {
		//If there is an user with this email
		if(user){
			bcrypt.compare( req.body.password, user.password, (err , match) => {
				//if there is a match
				if (match){
					let token = jwt.sign(user.toObject(), process.env.SECRET)
					res.status(200).json({
						message: 'You are logged in',
						token: token
					})
				}else{
					res.send('The password is not correct')
				}
			} )
		}else{
			//If the email is not found
			res.send('Email not found')
		}
	}).catch( (err) => {
		res.status(300).send(err)
	})
}
