$(function() {
	$.getJSON("http://api.yytianqi.com/observe?city=ip&key=lkb6hnkgab6o8ips", function(a) {
		var b = a.data.cityName;
		var c = a.data.qw;
		var d = a.data.tq;
		var e = [];
		e.push('<div class="wrapper"><div class="container">');
		if (d.indexOf("晴") != -1) {
			e.push('<div class="sunny"></div>')
		} else if (d.indexOf("云") != -1) {
			e.push('<div class="cloudy"></div>')
		} else if (d.indexOf("阴") != -1) {
			e.push('<div class="overcast"></div>')
		} else if (d.indexOf("雨") != -1) {
			e.push('<div class="rainy"></div>')
		} else if (d.indexOf("雪") != -1) {
			e.push('<div class="snowy"></div>')
		} else if (d.indexOf("雷") != -1 && d.indexOf("雨") != -1) {
			e.push('<div class="stormy"></div>')
		} else {
			e.push('<div></div>')
		}
		e.push("<h1>" + c + "℃</h1><p>" + b + "</p></div></div>");
		e = e.join("");
		$("body").html(e)
	})
});