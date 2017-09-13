const mysql = require('mysql2');
const db = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'osteapi'
});

const security = require('../services/security');

module.exports = (server) => {
	server.post('/login', (req, res) => {
		if (req.body.username === 'albert' &&
			req.body.password === '1234') {
			security.generateToken((err, token) => {
				if (!err) {
					const query = `INSERT INTO tokens
					SET token = ?`;

					db.execute(query, [token], (error, rows) => {
						if (!error) {
							res.send({ 'token': token });
						} 
					});
				} else {
					res.send(500);
				}
			});
		} else {
			res.send(401);
		}
	});
};