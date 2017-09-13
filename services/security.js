const crypto = require('crypto');

module.exports = {
	'isAuthenticated': (req, res, next) => {
		if (req.header('Authorization') === '1234') {
			return next();
		} else {
			return res.send(401);
		}
	},

	'generateToken': (next) => {
		crypto.randomBytes(256, (err, buffer) => {
			if (!err) {
				next(null, buffer.toString('hex'));
			} else {
				next('blaaargh');
			}
		});
	}
};