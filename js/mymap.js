function initialize() {

	var myLatLng = {
		lat: 28.480342,
		lng: 77.107700
	};

	var mapProp = {
		center: new google.maps.LatLng(28.480342, 77.107700),
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'OLX Listing'
	});

	var citymap = {
		delhi: {
			center: {
				lat: 28.480342,
				lng: 77.107700
			},
			population: 100
		},
		gurgoan: {
			center: {
				lat: 28.480342,
				lng: 77.107710
			},
			population: 200
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
			fillOpacity: 0.35,
			map: map,
			center: citymap[city].center,
			radius: 400
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