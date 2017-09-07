module.exports = (server) => {
	server.get('/customers', (req, res) => {
		res.send({ "kundenr": 654654, "navn": "Brian Emilius" });
	});
};