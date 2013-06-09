var html = "<span style='color:#c5c5c5;'>公司没有这本书</span>";

var isbn = $('#info').text().split('ISBN: ')[1];
$.ajax({
	type: "GET",
	url: "http://libr.herokuapp.com/api/bookinfo/" + isbn,
	success: function(data) {
		$.each(data, function(k, v) {
			if (k == "isbn" && v != null) {
				html = "<span style='background:yellow;'>公司图书馆有这本书</span>";
				return false;
			}
		});
		if ($('#borrowinfo').length > 0) {
			$('#borrowinfo h2').after(html);
		} else {
			html = "<hr style='border-top:1px dashed #c5c5c5;'>" + html;
			$('#buyinfo').append(html);
		}
	},
	error: function() {
		html = "<p>对不起, 我失足了</p>";
		$('#borrowinfo h2').after(html);
	}

})

