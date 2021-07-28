/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var serverExpress = express();

/* setar as variáveis 'view engine' e 'views' do express */
serverExpress.set('view engine', 'ejs');
serverExpress.set('views', './app/views');

/* configurar o middleware express.static */
serverExpress.use(express.static('./app/public'));

/* configurar o middleware body-parser */
serverExpress.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
serverExpress.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/dbConnection.js')
	.into(serverExpress);

/* exportar o objeto app */
module.exports = serverExpress;