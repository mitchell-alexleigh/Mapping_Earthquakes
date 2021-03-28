// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Alt to setVeiw used for multiple layers or background image 
/* let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4}); */

// creates tile layer that will be the background of the map.
//for differnt map styles see step 8 of moduel 13.2.4
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// adds 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
let line1 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
];

let line2 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
/* L.polyline(line1, {
    color: "red"
  }).addTo(map);
 */
  L.polyline(line2, {
    color: "yellow"
  }).addTo(map);
  