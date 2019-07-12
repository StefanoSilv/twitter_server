const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(req.body);
	db_user.findOne({name:req.body.name}).then( (user) => {
		console.log(user);
		if(user){
			res.send('The name is already present in the database')
		}else{
			bcrypt.hash(req.body.password, 10, (err, encrypted) =>{
				if (err) {
					res.status(300).send('Error:', err)
				} else {
					req.body.password = encrypted
					db_user.create(req.body).then( (user) =>{
						let token = jwt.sign(user.toObject(), process.env.SECRET)
						res.status(200).json({
							message: 'You are signde up',
							token: token
						})
					}).catch((err) => {
						res.send(err)
					})
				}
			})
		}
	}).catch( (err) => {
		res.send(err)
	})
}
