<?php require "./scripts/includes/scripts/header.inc";?>
<?php include "navbar.php";?>
<div id="body_content">
	<div class="content">
		<div class="header">
			<h1 id="static_title">Search Results</h1>
		</div>
		<div id="search_results_map">
		</div>
		<script type="text/javascript">
		var locations = [
			['Carina Library Wifi', -27.49169314, 153.0912127, 3],
			['Carindale Library Wifi', -27.50475928, 153.1003965, 2],
			['Carindale Recreation Reserve', -27.497, 153.11105, 1]
			];
		var map = new google.maps.Map(document.getElementById('search_results_map'), {
		zoom: 10,
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
		<div id="search_results">
			<a href="individualresult.php">
				<div class="search_result_block">
					<div class="search_result_block_hot_spot_name">
						<p>Carina Library Wifi</p>
					</div>
					<img src="images/parkimage1.jpg">
					<div class="search_result_block_address">
						<p>Corner Mayfield Road & Nyrang Street</p>
					</div>
				</div>
			</a>
			<a href="individualresult.php">
				<div class="search_result_block">
					<div class="search_result_block_hot_spot_name">
						<p>Carindale Library Wifi</p>
					</div>
					<img src="images/parkimage2.jpg">
					<div class="search_result_block_address">
						<p>Corner Carindale Street  & Banchory Court</p>
					</div>
				</div>
			</a>
			<a href="individualresult.php">
				<div class="search_result_block">
					<div class="search_result_block_hot_spot_name">
						<p>Carindale Recreation Reserve</p>
					</div>
					<img src="images/parkimage3.jpg">
					<div class="search_result_block_address">
						<p>Cadogan and Bedivere St</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
<?php  require "./scripts/includes/footer.inc";?>