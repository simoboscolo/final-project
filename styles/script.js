$(document).ready(function(){

	$("#dayOnePop").hide(0);
	$("#dayTwoPop").hide(0);

// DAY ONE

	$("#dayOne").click(function(){

		$("#dayOnePop").fadeIn(800);

		function changeImg(selector, image) {
			selector.attr("src", "imgs/day1/" + image + ".jpg");
		}

		var sel = $("#dayOneImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		setInterval(function(){
			changeImg(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);
	
	});

	$("#dayOneHide").click(function(){
		$("#dayOnePop").fadeOut(800);
	});

// DAY TWO

	$("#dayTwo").click(function(){

		$("#dayTwoPop").fadeIn(800);

		function changeImg2(selector, image) {
			selector.attr("src", "imgs/day2/" + image + ".jpg");
		}

		var sel = $("#dayTwoImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		setInterval(function(){
			changeImg2(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);
	
	});

	$("#dayTwoHide").click(function(){
		$("#dayTwoPop").fadeOut(800);
	});

});
