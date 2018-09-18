	var locations = [
	  ['Carina Library Wifi', -27.49169314, 153.0912127, 3],
	  ['Carindale Library Wifi', -27.50475928, 153.1003965, 2],
	  ['Carindale Recreation Reserve', -27.497, 153.11105, 1]
	];

	var map = new google.maps.Map(document.getElementById('map'), {
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