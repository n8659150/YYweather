$(function() {
		$.getJSON("http://api.yytianqi.com/observe?city=ip&key=lkb6hnkgab6o8ips",function(weather){//YY天气实时天气预报API
		 	var cityName = weather.data.cityName; //城市名
		 	var temperature = weather.data.qw; //气温
		 	var foreast = weather.data.tq; //天气
		 	var context = [];
		 	context.push('<div class="wrapper"><div class="container">');
		 	//根据返回的天气描述匹配相应类
			 	if (foreast.indexOf("晴")!= -1) { 
			 		context.push('<div class="sunny"></div>'); //
			 	} 
			 	else if (foreast.indexOf("云")!= -1) { //云：cloudy
			 		context.push('<div class="cloudy"></div>');
			 	}
			 	else if (foreast.indexOf("阴")!= -1) { //阴：overcast
			 		context.push('<div class="overcast"></div>');
			 	}
			 	else if (foreast.indexOf("雨")!= -1) { //雨
			 		context.push('<div class="rainy"></div>');
			 	}
			 	else if (foreast.indexOf("雪")!= -1) { //雪
			 		context.push('<div class="snowy"></div>');
			 	}
			 	else if (foreast.indexOf("雷")!= -1 && foreast.indexOf("雨")!= -1) { //雷 AND 雨
			 		context.push('<div class="stormy"></div>');
			 	}
			 	else {
			 		context.push('<div></div>'); //default
			 	}
		 	context.push("<h1>" +temperature+ "℃</h1><p>" +cityName+ "</p></div></div>"); //生成HTML
		 	context = context.join("");
		 	$("body").html(context); //写入body
		});  		
	});