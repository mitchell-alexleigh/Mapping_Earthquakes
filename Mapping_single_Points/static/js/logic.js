// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alt to setVeiw used for multiple layers or background image 
/* let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4}); */

// creates tile layer that will be the background of the map.
//for differnt map styles see step 8 of moduel 13.2.4
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// adds 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//add circle marker
/* let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 100}).addTo(map); */

//skill drill circle marker
let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 30,
    stroke: true,
    color: '#FFFF00',
    fill: true,
    fillOpacity: .5}).addTo(map);