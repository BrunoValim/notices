module.exports = function(application){
	application.get('/noticias', function(req, res){
		res.render('noticias/noticias');
	});
};