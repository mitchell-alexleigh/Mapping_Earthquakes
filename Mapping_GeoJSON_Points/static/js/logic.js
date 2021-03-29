// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Alt to setVeiw used for multiple layers or background image 
/* let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4}); */

// creates tile layer that will be the background of the map.
//for differnt map styles see step 8 of moduel 13.2.4
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// adds 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
/* L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.city + "</h2>");
    }

}).addTo(map); */
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(layer);
        layer.bindPopup("<h4> Airport Code: " + feature.properties.faa + "</h4> <hr> <h4> Airport Name: "+feature.properties.name +"</h4>");
    }
}).addTo(map);