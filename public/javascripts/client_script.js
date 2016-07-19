function watch(details_url) {
	$.getJSON(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			$.each(data, function( key, val ) {
				if(val === ''){
					alert('Hiện tại chưa có link, mời bạn quay lại sau');
				} else {
					window.location.replace(val);
				}
			});
		});
}