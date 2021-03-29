// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// creates tile layer that will be the background of the map.
//for differnt map styles see step 8 of moduel 13.2.4
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// adds 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/mitchell-alexleigh/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.

d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    
    L.geoJson(data).addTo(map);
});

//skill drill to add info to markers for each data point
// Grabbing our GeoJSON data.
/* d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        //add a popup marker that displays all airports' codes and names.
        onEachFeature: function(feature, layer){
            console.log(layer);
            layer.bindPopup("<h4> Airport Code: " + feature.properties.faa + "</h4> <hr> <h4> Airport Name: "+feature.properties.name +"</h4>");
        }
    }).addTo(map);
    
}); */

