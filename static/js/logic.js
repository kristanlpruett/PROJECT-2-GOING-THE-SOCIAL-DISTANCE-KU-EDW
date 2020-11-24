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

var cityIcon = L.icon({
  iconUrl: 'static/images/city.png',
  shadowUrl: 'static/images/city.png',

  iconSize:     [60, 60], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [30,30], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [-85,20] // point from which the popup should open relative to the iconAnchor
});

var trailIcon = L.icon({
  iconUrl: 'static/images/trail.png',
  shadowUrl: 'static/images/trail.png',

  iconSize:     [40, 40], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [-55, 20] // point from which the popup should open relative to the iconAnchor
});

var routeIcon = L.icon({
  iconUrl: 'static/images/rock.png',
  shadowUrl: 'static/images/rock.png',

  iconSize:     [40, 40], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [-55,20] // point from which the popup should open relative to the iconAnchor
});

var dispIcon = L.icon({
  iconUrl: 'static/images/green.png',
  shadowUrl: 'static/images/green.png',

  iconSize:     [40,40], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [0,0], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [-55,20] // point from which the popup should open relative to the iconAnchor
});

// bring in city data
d3.csv("static/js/latlong_list.csv", function(response) {

  // Create a new marker cluster group
  var cityLayer = L.layerGroup()
  var cityMarkers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var city = response[i];
    // Add a new marker to the cluster group, bind a pop-up, and add on click event
    cityMarkers.addLayer(L.marker([city['latitude'], city['longitude']],{icon: cityIcon}).bindPopup(response[i].names))
      .on('click', click);
  };
  //add markers to layer
  cityMarkers.addTo(cityLayer);
  //add layer to myMap
  myMap.addLayer(cityLayer);  
});


//bring in activity data when clicking a city
function click(e) {

  // Create a new marker cluster group
  var trailLayer = L.layerGroup()
  var trailMarkers = L.markerClusterGroup();

  // Create a new marker cluster group
  var routeLayer = L.layerGroup()
  var routeMarkers = L.markerClusterGroup();

  // Create a new marker cluster group
  var dispLayer = L.layerGroup()
  var dispMarkers = L.markerClusterGroup();

  // Bring in Trails data 
  d3.json(`/trails/${e.layer._popup._content}`).then(d => {    
    // Loop through the trail data
    d.forEach(function (tr) {
      trailMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: trailIcon})
      .bindPopup(
        `<strong>${tr['trail']}</strong><br>
        <a href=${tr['url']} target="_blank"><img src=${tr['image_url']}></a><br>
        ${tr['summary']}<br>
        Length: ${tr['length']}<br>
        Difficulty: ${tr['difficulty']}<br>
        Stars: ${tr['stars']}

      `))
    });
    trailMarkers.addTo(trailLayer);
    myMap.addLayer(trailLayer);

    //Additional steps with the data

  });

  // Bring in Routes data 
  d3.json(`/routes/${e.layer._popup._content}`).then(d => {    
    // Loop through the trail data
    d.forEach(function (tr) {
      routeMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: routeIcon})
      .bindPopup(
        `<strong>${tr['route']}</strong><br>
        <a href=${tr['url']} target="_blank"><img src=${tr['image_url']}></a><br>
        Type: ${tr['type']}<br>
        Rating: ${tr['rating']}<br>
        Pitches: ${tr['pitches']}<br>
        Stars: ${tr['stars']}
      `))
    });
    routeMarkers.addTo(routeLayer);
    myMap.addLayer(routeLayer);
    
    //Additional steps with the data
  });


  // Bring in Dispensary data 
  d3.json(`/dispensaries/${e.layer._latlng.lat}/${e.layer._latlng.lng}`).then(d => {    
  // Loop through the trail data
    d.forEach(function (tr) {
      trailMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: dispIcon})
      .bindPopup(
        `<strong>${tr['dispensary']}</strong><br>
        Type: ${tr['type']}<br>
      `))
    });
    dispMarkers.addTo(dispLayer);
    myMap.addLayer(dispLayer);

    //Additional steps with the data
  });
  myMap.flyTo([`${e.layer._latlng.lat}`,`${e.layer._latlng.lng}`],8)
};