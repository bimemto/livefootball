var request = require('request');

function watch(details_url) {
	$.get(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			alert('page content: ' + data);
		}
	);
	// request.get('http://bu.1ly.co:6868/euro/api/get_live_url?details_url=' + details_url, function(error, response, body){
	// 	if(error){
	// 		console.log(error);
	// 	} else {
	// 		alert(body);
	// 	}
	// });
}