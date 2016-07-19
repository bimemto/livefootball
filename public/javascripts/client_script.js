var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;

function watch(details_url) {
	var myWindow = window.open("about:blank",'name');
	$.getJSON(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			$.each(data, function( key, val ) {
				if(val === ''){
					alert('Hiện tại chưa có link, mời bạn quay lại sau');
				} else {
					if(isAndroid){
						window.location.replace(val);
					} else {
						myWindow.open(val,'name');	
					}
					
				}
			});
		});
}

function is_mobile(req) {
	var ua = req.header('user-agent');
	if (/mobile/i.test(ua)) return true;
	else return false;
};