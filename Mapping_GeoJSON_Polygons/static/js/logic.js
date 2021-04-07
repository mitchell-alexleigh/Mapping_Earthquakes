// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// creates tile layer that will be the background of the map.
//for differnt map styles see step 8 of moduel 13.2.4
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [streets]
})

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
    };

// adds 'graymap' tile layer to the map.
streets.addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/mitchell-alexleigh/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

//creats airport map with markers and popups 
/* d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        onEachFeature: function(feature, layer){
            console.log(layer);
            layer.bindPopup("<h4> Airport Code: " + feature.properties.faa + "</h4> <hr> <h4> Airport Name: "+feature.properties.name +"</h4>");
        }
    }).addTo(map); 
}); */
/* 
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer){
            console.log(layer);
            layer.bindPopup("<h4> Airport Code: " + feature.properties.airline + "</h4> <hr> <h4> Airport Name: "+feature.properties.dst +"</h4>");
        }
    }).addTo(map); 
}); */

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map); 
}); 


