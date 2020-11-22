var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


var trailsArray = new Array()

var trailIcon = L.icon({
  iconUrl: 'static/js/trail_reduced.png',
  shadowUrl: 'static/js/trail_reduced.png',

  iconSize:     [25, 25], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});



// Add Cities to map
var d = d3.csv("static/js/latlong_list.csv", function(data) {
  //empty array placeholder for trails data
  trailsArray = []

  for (var i=0; i<data.length; i++) {
    //Add each city from CSV to the list
    var city = data[i];
    //Define cityMarkers for each city
    var cityMarker = L.marker([city['latitude'], city['longitude']], {
      draggable: false,
      title: city.names
    });
    
    //Set on click funciton for each city marker to bring in the data for trails, routes, dispensaries, etc.
    cityMarker.on("click", function (a) {
      //get coordinates from properties of the clicked marker
      // console.log(a.latlng)
      d3.json(`/query/${a.target.options.title}`).then(d => {
        // console.log(a.target.options);
        d.forEach(function (c) { 
          trailsArray.push(c)
        });
        
        //Create markers for each of the trailsArray
        trailsArray.forEach(function(trail) {
          var trailMarker = L.marker(trail['coords'], {icon: trailIcon, draggable: false, title: trail['city']})
          trailMarker.addTo(myMap);
          trailMarker.bindPopup(trail['city'])
        });
      });

      //refocus map on selected area
      myMap.flyTo([a.latlng['lat'],a.latlng['lng']],7)
    });

    //add city marker to the map
    cityMarker.addTo(myMap);
    // Bind pop-up to city marker
    cityMarker.bindPopup(city.names);
  }
});




// var button = d3.select("button");
// button.on("click", runFilter);

// function runFilter() {
//   var selectedCity = d3.select("#city").property("value");

//   d3.json(`/query/${selectedCity}`).then(d => {
//     console.log(d);
//   });
// };

