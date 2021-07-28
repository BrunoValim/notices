/* importar as configurações do servidor */
var server = require('./config/server');

/* parametrizar a porta de escuta */
server.listen(8000, function () {
	console.log('Servidor online');
})