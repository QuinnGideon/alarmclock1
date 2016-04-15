$(document).ready(function(){

	setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();
		
		


		$('#hr').text(hr);
		var minElement = $('#min');
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);

		even(min, minElement);

	}, 1);

		// odd();

		function even(time, el) {
			// console.log(x);
			if (time % 2 == 0){
				el.css("color", "blue");
			} else {
				el.css("color", "white");
			}
		}


		function fiveMin(){
			var colors = ["blue", "pink", "orange", "green", "yellow", "limegreen"]
			var rand = Math.floor(Math.random()*colors.length)
			return colors[rand]
		}

		setInterval(function(){ $("body").css("background", fiveMin); }, 3000)



		function everyHr(){
			var colors = ["blue", "pink", "orange", "green", "yellow", "limegreen"]
			var rand = Math.floor(Math.random()*colors.length)
			return colors[rand]
		}

		setInterval(function(){ $("h1").css("color", fiveMin); }, 3600)

});
