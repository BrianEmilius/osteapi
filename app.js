const restify = require('restify');
const server = restify.createServer({
	'name': 'osteapi',
	'version': '1.0.0'
});

require('./routes/index')(server);

server.listen(1337);