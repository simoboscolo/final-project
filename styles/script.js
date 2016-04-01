$(document).ready(function(){

	$("#dayOnePop").hide(0);
	$("#dayTwoPop").hide(0);
	$("#dayThreePop").hide(0);
	$("#dayFourPop").hide(0);
	$("#dayFivePop").hide(0);

// DAY ONE

	$("#dayOne").click(function(){

		$("#dayOnePop").fadeIn(800);

		function changeImg(selector, image) {
			selector.attr("src", "imgs/day1/" + image + ".jpg");
		}

		var sel = $("#dayOneImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		var intervalId = setInterval(function(){
			changeImg(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);

		$("#dayOneHide").click(function(){
			clearInterval(intervalId);
			$("#dayOnePop").fadeOut(800);
		});
	
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

		var intervalId = setInterval(function(){
			changeImg2(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);

		$("#dayTwoHide").click(function(){
			clearInterval(intervalId);
			$("#dayTwoPop").fadeOut(800);
		});
	
	});


// DAY THREE

	$("#dayThree").click(function(){

		$("#dayThreePop").fadeIn(800);

		function changeImg3(selector, image) {
			selector.attr("src", "imgs/day3/" + image + ".jpg");
		}

		var sel = $("#dayThreeImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		var intervalId = setInterval(function(){
			changeImg3(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);

		$("#dayThreeHide").click(function(){
			clearInterval(intervalId);
			$("#dayThreePop").fadeOut(800);
		});
	
	});

// DAY FOUR

	$("#dayFour").click(function(){

		$("#dayFourPop").fadeIn(800);

		function changeImg4(selector, image) {
			selector.attr("src", "imgs/day4/" + image + ".jpg");
		}

		var sel = $("#dayFourImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		var intervalId = setInterval(function(){
			changeImg4(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);

		$("#dayFourHide").click(function(){
			clearInterval(intervalId);
			$("#dayFourPop").fadeOut(800);
		});
	
	});

// DAY FIVE

	$("#dayFive").click(function(){

		$("#dayFivePop").fadeIn(800);

		function changeImg5(selector, image) {
			selector.attr("src", "imgs/day4/" + image + ".jpg");
		}

		var sel = $("#dayFiveImg");
		var images = ["1", "2", "3", "4", "5"];
		var i = 0;

		var intervalId = setInterval(function(){
			changeImg5(sel, images[i]);
			if (i == 4) {
				i = 0;
			} else {
				i++;
			}
		}, 5000);

		$("#dayFiveHide").click(function(){
			clearInterval(intervalId);
			$("#dayFivePop").fadeOut(800);
		});
	
	});	

});
