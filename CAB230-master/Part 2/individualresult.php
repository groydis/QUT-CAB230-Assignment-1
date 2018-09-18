<?php require "./includes/header.inc";?>
<?php enforce_login(); ?>
<div class="header">
	<h1 id="static_title">Carina Library</h1>
</div>
<!--Results Page-->
<!--Results Map Showing the Location of the Wi-Fi Hotspot in Javascript-->
<div id = "results_map">
	<script type="text/javascript">
	var locations = [
	['Carina Library Wifi', -27.49169314, 153.0912127, 3],
	];
	var map = new google.maps.Map(document.getElementById('results_map'), {
	zoom: 11.5,
	center: new google.maps.LatLng(-27.50475928, 153.1003965),
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var infowindow = new google.maps.InfoWindow();
	var marker, i;
	for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
	position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	map: map
	});
	google.maps.event.addListener(marker, 'click', (function(marker, i) {
	return function() {
	infowindow.setContent(locations[i][0]);
	infowindow.open(map, marker);
	}
	})(marker, i));
	}
	</script>
</div>
<!--Span Block for the Address and the Overall Rating of the Hotspot-->
<div class = "individual_result">
	<!--Adress for the WiFi Hotspot-->
	<div id = "result_address">
		<p>Corner Carindale Street & Banchory Court</p>
	</div>
	<!--Overall Star Rating Calculated from User Reviews-->
	<div id = "result_rating">
		<!--The Star Rating is written on one line
			as there is a small space inbetween the stars that is cause by a new line creation in the code-->
		<i class="fas fa-star"
		></i><i class="fas fa-star"
		></i><i class="fas fa-star"
		></i><i class="fas fa-star"
		></i><i class="fas fa-star-half"></i>
	</div>
</div>
<!--Review Block for all User Reviews-->
<div class = "result_reviews">
	<!--Review Block to be Reused for Every User Review-->
	<div class = "curr_review_block">
		<div class="review_header">
			<!--Username of the Person who Posted the Review-->
			<div class="review_result_username"><p>jackoSmith</p></div>
			<!--User Rated with Stars-->
			<div class="review_result_rating">
				<!--The Star Rating is written on one line
					as there is a small space inbetween the stars that is cause by a new line creation in the code-->
				<i class="fas fa-star"
				></i><i class="fas fa-star"
				></i><i class="fas fa-star"
				></i><i class="fas fa-star"
				></i><i class="far fa-star"></i>
			</div>
		</div>
		<!--Review Comments-->
		<div class="review_result_comments">
			<p>This Wi-Fi connection occasionally drops in and out bvut when connnected the data transfer rate is very high.</p>
		</div>
		<!--Date when the Review is Posted-->
		<div class="review_result_date_time"><p>03/04/2018 - 11:23:56</p></div>
	</div>
	<!--Reused Review Block from Previous Review-->
	<div class = "curr_review_block">
		<!--Username of Person who Posted the Review-->
		<div class="review_result_username"><p>smithoJack</p></div>
		<!--User Rated with Stars-->
		<div class="review_result_rating">
			<i class="fas fa-star"
			></i><i class="fas fa-star"
			></i><i class="fas fa-star"
			></i><i class="fas fa-star"
			></i><i class="fas fa-star"></i>
		</div>
		<!--Review Comments-->
		<div class="review_result_comments">
			<p>The connection is great. I had no problems with this WiFi hotspot.</p>
		</div>
		<!--Date when the Review is Posted-->
		<div class="review_result_date_time"><p>01/04/2018 - 09:32:42</p></div>
	</div>
	<!--Place for a Person to Enter a Review-->
	<div id = "enter_review">
		<form id="review" onsubmit="return validateReview()">
			<h2>Enter a Review</h2>
			<!--Enter a Review in the text box-->
			<input type="text" id="entered_review" placeholder="Enter Your Review Here" onfocus="undoTextError()">
			<div class="error_message" id="review_error"></div>
			<!--Enter a User Rating with Javascript-->
			<div class="enter_rating_star">
				<!--The Star Rating is written on one line as there is a small space inbetween the stars that is cause by a new line creation in the code-->
				<i id="one" class="far fa-star" onmouseover="starOneOver()" onmouseout="starOneOut()"
				onclick="starOneClicked()"></i><i id="two" class="far fa-star" onmouseover="starTwoOver()" onmouseout="starTwoOut()" onclick="starOTwoClicked()"
				></i><i id="three" class="far fa-star" onmouseover="starThreeOver()" onmouseout="starThreeOut()" onclick="starThreeClicked()"
				></i><i id="four" class="far fa-star" onmouseover="starFourOver()" onmouseout="starFourOut()" onclick="starFourClicked()"
				></i><i id="five" class="far fa-star" onmouseover="starFiveOver()" onmouseout="starFiveOut()" onclick="starFiveClicked()"></i>
			</div>
			<!--Button to Submit the Review-->
			<input type="submit" id="button" name="review_submit" value="Submit">
		</form>
	</div>
</div>
<?php  require "./scripts/includes/footer.inc";?>