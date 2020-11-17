//Montain Project API
var routesApiKey = "200227251-dff824783300bfdde3f3714b65feede7";
var trailsApiKey = "200227251-52bbf40f14de65bb8de3f88b82402869";
var OpenWeatherAPI = "94e068ccf7cb21e0c2f4fa4540420c33";

var city = "Kansas City";
var lat = 45.4196;
var lon = -111.2293;
var maxDist = 5;
var minDiff = 5.5;
var maxDiff = 5.14;
var maxResults = 100;

getCoords();
getRoutes();
getTrails();

function getCoords() {
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OpenWeatherAPI}`
    d3.json(queryUrl).then(function(data) {
        coords = data["coord"]
        console.log(coords)
    });
};

function getRoutes() {
    var queryUrl = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=${maxDist}&minDiff=${minDiff}&maxDiff=${maxDiff}&maxResults=${maxResults}&key=${routesApiKey}`;
    d3.json(queryUrl).then(function(data) {
        routes = data
        console.log(routes)
    });
};

function getTrails() {
    var queryUrl = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${maxDist}&maxResults=${maxResults}&key=${trailsApiKey}`
    d3.json(queryUrl).then(function(data) {
        trails = data
        // for (i = 0; i < trails["trails"].length; i++) {
        //     console.log(trails["trails"][i]["difficulty"])
        // };
        console.log(trails)
    });
};