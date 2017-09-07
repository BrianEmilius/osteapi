module.exports = (server) => {
	require('./cheeses')(server);
	require('./customers')(server);
};