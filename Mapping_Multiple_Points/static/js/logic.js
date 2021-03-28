// Add console.log to check to see if our code is working.
console.log("logic.js is running");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.8283, -98.5795], 4);

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


let cityData = cities

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});