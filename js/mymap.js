function initialize() {

	var myLatLng = {
		lat: 28.480342,
		lng: 77.107700
	};

	var myLatLng2 = {
		lat: 28.480542,
		lng: 77.117700
	};

	var mapProp = {
		center: new google.maps.LatLng(28.480342, 77.107700),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);



	var marker1 = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Samsung S3 Mobile'
		
	});


	var infowindow = new google.maps.InfoWindow({
		content: '<p>1 Year Old Blue BMW Car for Sale</p>'
	});


	marker1.addListener('click', function () {
		infowindow.open(map, marker1);
	});



	var marker2 = new google.maps.Marker({
		position: myLatLng2,
		map: map,
		title: 'BMW Blue Car'
	});


	/*for (var i=0 ;i<markers.length;i++) {
		var marker = new google.maps.Marker({
		position: markers[i].latlong,
		map: map,
		title: markers[i].title;
	});
	}*/



	var citymap = {
		delhi: {
			center: {
				lat: 28.480342,
				lng: 77.107700
			},
			listingCount: 100
		},
		gurgoan: {
			center: {
				lat: 28.480342,
				lng: 77.107710
			},
			listingCount: 200
		}
	};



	// Construct the circle for each value in citymap.
	// Note: We scale the area of the circle based on the population.
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.15,
			map: map,
			center: citymap[city].center,
			radius: 10000
		});
	}

}






function loadScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
}

window.onload = loadScript;