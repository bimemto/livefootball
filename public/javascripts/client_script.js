

function watch(details_url) {
	$.getJSON(
		"http://bu.1ly.co:6868/euro/api/get_live_url",
		{details_url : details_url},
		function(data) {
			$.each(data, function( key, val ) {
				if(val === ''){
					alert('Hiện tại chưa có link, mời bạn quay lại sau');
				} else {
					var win = window.open('http://bu.1ly.co', '', '');
					do_the_ajax_call(win, val);
				}
			});
		});
}

function do_the_ajax_call(myPopup, theNewURL){
     $.ajax({
          url: "http://bu.1ly.co",
          type: "POST",
          success: function(data){
               myPopup.location = theNewURL;
          }
     });
}

function is_mobile(req) {
	var ua = req.header('user-agent');
	if (/mobile/i.test(ua)) return true;
	else return false;
};