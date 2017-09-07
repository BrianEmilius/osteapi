const Service = require('../services/cheeses');

module.exports = (server) => {
	server.get('/cheeses', (req, res) => {
		res.send(Service.getAll());
	});

	server.get('/cheeses/:varenr', (req, res) => {
		res.send(Service.getOne(req.params.varenr));
	});
};