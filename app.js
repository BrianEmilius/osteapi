const restify = require('restify');
const server = restify.createServer({
	'name': 'osteapi',
	'version': '1.1.0'
});

server.use(restify.plugins.bodyParser());

require('./routes/index')(server);

server.listen(1337);