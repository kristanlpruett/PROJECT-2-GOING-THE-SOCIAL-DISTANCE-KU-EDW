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
      trailMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: trailIcon}).bindPopup(`${tr['trail']}<br>Length: ${tr['length']}<br>Difficulty: ${tr['difficulty']}`))
    });
    trailMarkers.addTo(trailLayer);
    myMap.addLayer(trailLayer);
  });

  // Bring in Routes data 
  d3.json(`/routes/${e.layer._popup._content}`).then(d => {    
    // Loop through the trail data
    d.forEach(function (tr) {
      routeMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: routeIcon}).bindPopup(tr['route']))
    });
    routeMarkers.addTo(routeLayer);
    myMap.addLayer(routeLayer);    
  });
  // Bring in Dispensary data 
  d3.json(`/dispensaries/${e.layer._latlng.lat}/${e.layer._latlng.lng}`).then(d => {    
  // Loop through the trail data
    d.forEach(function (tr) {
      trailMarkers.addLayer(L.marker([tr['lat'], tr['lon']],{icon: dispIcon}).bindPopup(tr['dispensary']))
    });
    dispMarkers.addTo(dispLayer);
    myMap.addLayer(dispLayer);
  });
  
};




// function selectCity(lat, lon) {
//   console.log(lat)
//   console.log(lon)
// }
// })

// console.log(a.latlng['lat'])
// console.log(a.latlng['lng'])
// //Bring in Trails data 
// // d3.json(`/trails/${a.target._popup._content}`).then(d => {    
// //   var jsonData = d
          
// //   // Create a new marker cluster group
// //   var activityMarkers = L.markerClusterGroup();
  
// //   // Loop through the trail data
// //   for (var j=0; j < jsonData.length; j++) {
// //     var coords = [jsonData[j]['lat'],jsonData[j]['lon']]
// //     activityMarkers.addLayer(L.marker(coords)).bindPopup(`Trail: ${jsonData[j]['city']}`)
// //   }
// //   myMap.addLayer(activityMarkers);
// // });
// // //Bring in Routes data
// // d3.json(`/routes/${a.target._popup._content}`).then(d => {    
// //   var jsonData = d
           
// //   // Create a new marker cluster group
// //   var activityMarkers = L.markerClusterGroup();
  
// //   // Loop through the routes data
// //   for (var j=0; j < jsonData.length; j++) {
// //     var coords = [jsonData[j]['lat'],jsonData[j]['lon']]
// //     activityMarkers.addLayer(L.marker(coords)).bindPopup(`Route: ${jsonData[j]['city']}`)
// //   }
// //   myMap.addLayer(activityMarkers);
// // });
// // Bring in Dispensaries data
// d3.json(`/dispensaries/${a.latlng['lat']}/${a.latlng['lng']}`).then(d => {    
//   var jsonData = d
//   console.log(jsonData)
            
//   // Create a new marker cluster group
//   var dispLayer = L.layerGroup()
//   var dispMarkers = L.markerClusterGroup();



//   jsonData.forEach(function (data) {
//     var coords = [data['lat'],data['lon']]
//     cityMarkers.addLayer(L.marker(coords),{icon: {iconUrl: 'static/js/green.png'}})
//       .bindPopup(data['name'])     
//   })






//   // // Loop through the routes data
//   // for (var j=0; j < jsonData.length; j++) {
//   //   var coords = [jsonData[j]['lat'],jsonData[j]['lon']]
//   //   cityMarkers.addLayer(L.marker(coords)).bindPopup(`Dispensary: ${jsonData[j]['name']}`)._popup._content=jsonData[j]['name'];
    
    
//   // };
//   // console.log(cityMarkers._popup._content);
//   dispMarkers.addTo(dispLayer);
//   myMap.addLayer(dispLayer);
// });


// // //Set on click funciton for each city marker to bring in the data for trails, routes, dispensaries, etc.
// // cityMarkers.on("click", function (a) {
// //   //get coordinates from properties of the clicked marker
// //   // console.log(a.latlng)
// //   d3.json(`/query/${a.target.options.title}`).then(d => {
// //     // console.log(a.target.options);
// //     d.forEach(function (c) { 
// //       trailsArray.push(c)
// //     });
// //     //Create markers for each of the trailsArray
// //     trailsArray.forEach(function(trail) {
// //       var trailMarker = L.marker(trail['coords'], {icon: trailIcon, draggable: false, title: trail['city']})
// //       trailMarker.addTo(myMap);
// //       trailMarker.bindPopup(trail['city'])
// //     });
// //   });
// //   //refocus map on selected area
// //   myMap.flyTo([a.latlng['lat'],a.latlng['lng']],8)
// // })