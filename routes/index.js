module.exports = (server) => {
	require('./cheeses')(server);
	require('./customers')(server);
	require('./hemmelig')(server);
	require('./login')(server);
};