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
    
var d = d3.csv("/static/js/latlong_list.csv", function(data) {
  for (var i=0; i<data.length; i++) {
    var city = data[i]
  
    var marker = L.marker([city['latitude'], city['longitude']], {
      draggable: false,
      title: city.names
    }).addTo(myMap);
    
    // Binding a pop-up to our marker
    marker.bindPopup(city.names);
  }
});