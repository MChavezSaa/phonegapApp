// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });
  var app = new Framework7();

var $$ = Dom7;

//map here
var map;
var marker;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        marker = new google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map
        });
        map.addListener('click', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
          navigator.vibrate([600,500]);

        });      
      }
      function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
      }


//GPS Uses
function functionSuccess(position){

              console.log('Latitude: '          + position.coords.latitude );         
              console.log('Longitude: '         + position.coords.longitude      );       
              console.log('Altitude: '          + position.coords.altitude           );   
              console.log('Accuracy: '          + position.coords.accuracy           );   
              console.log('Altitude Accuracy: ' + position.coords.altitudeAccuracy   );   
              console.log('Heading: '           + position.coords.heading            );   
              console.log('Speed: '             + position.coords.speed              );   

              $$("#lat").html(position.coords.latitude);
              $$("#lgn").html(position.coords.longitude);
              var pos= {lat: position.coords.latitude, lng: position.coords.longitude };
              map.setCenter(pos);
              map.setZoom(18);
              marker.setPosition(pos);
}
function functionFailure(error){
console.log("Hubo un Error!");
}
var gpsOptions= { timeout: 5000, enableHighAccuracy:true}
var watchID = navigator.geolocation.watchPosition(functionSuccess,functionFailure,gpsOptions);

// Alert
$$('.open-alert').on('click', function () {
  app.dialog.alert('Modelo '+device.model+ " "+ device.manufacturer);
  navigator.vibrate([1000,500,2000,500,3000,500,600,500,600,500,600]);
});


var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    var watchID = navigator.geolocation.watchPosition(position,error,gpsOptions);

});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})