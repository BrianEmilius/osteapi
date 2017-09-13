const security = require('../services/security');

module.exports = (server) => {
	server.get('/hemmelig', security.isAuthenticated, (req, res) => {
		security.generateToken((err, token) => {
			res.send(token);
		});
	});
};