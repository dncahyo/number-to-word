module.exports = function(app) {
	
	var numberToWord = require('../node_modules/numberToWord');
	var lang = require('../config/lang.js');

	app.get('/hello', function (req, res) {
	  res.json({hello:'hello'});
	});

	app.post('/convert', function (req, res) {
	  config = lang.config();
	  var wordify = [];
	  req.body.data.num.forEach(function(el){
  		 var str = numberToWord.convert(el, config[req.body.data.lang]);
  		 wordify.push(str);
	  });
	  res.json({word: wordify});
	});

	app.get('*', function(req, res) {
		res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
