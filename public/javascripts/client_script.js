

function watch(details_url) {
	$.getJSON(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			$.each(data, function( key, val ) {
				if(val === ''){
					alert('Hiện tại chưa có link, mời bạn quay lại sau');
				} else {
					do_the_ajax_call(val);
				}
			});
		});
}

function do_the_ajax_call(theNewURL){
	$.ajax({
		url: "http://bu.1ly.co",
		success: function(){
			window.open(theNewURL);
		},
		async: false
	});
}

function is_mobile(req) {
	var ua = req.header('user-agent');
	if (/mobile/i.test(ua)) return true;
	else return false;
};