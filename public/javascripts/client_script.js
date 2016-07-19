function watch(details_url) {
	$.getJSON(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			$.each(data, function( key, val ) {
				var url = 'http://stackoverflow.com/questions/503093/how-can-i-make-a-page-redirect-using-jquery';
				window.location.replace(url);
			});
		});
}