var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	request.get('http://bu.1ly.co:6868/euro/api/match_list', function(error, response, body){
		if(error){
			res.render('error', {message: 'Oops', status: error.status, stack: error.stack});
		} else {
			res.render ('index',
				{  
					title: 'Live football',
				    json: body
				}
			);
		}
	})
});

module.exports = router;
