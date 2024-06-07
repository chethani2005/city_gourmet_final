  //get reference to interactive elements
  
  const txtOutput = document.getElementById("output");
  
  //listen for user clicking the button
  document.addEventListener('DOMContentLoaded', find);
  
  //when find button clicked
  function find() {
      if (!navigator.geolocation) {
          txtOutput.innerHTML = "Your browser doesn't support geolocation";
      } else {
          txtOutput.innerHTML = "Attempting to locate you&hellip;";
          navigator.geolocation.getCurrentPosition(success, failure);
      }
  }
  
  function success(location) {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
  
   txtOutput.innerHTML = `<p>Your location is ${lat.toFixed(3)}&#0176; latitude,
                          ${long.toFixed(3)}&#0176; longitude<br>
                          This is accurate to
                          ${location.coords.accuracy.toFixed(3)}m.</p>`;
  
  const map = L.map('map').setView([lat, long], 12);
  
                          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                              maxZoom: 19,
                              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                              }).addTo(map);
                              
  const marker = L.marker([lat, long]).addTo(map);
  
  marker.bindPopup("You are here").openPopup();
  
  
                          
  }
  
  
  function failure(error) {
      switch (error.code) {
          case error.PERMISSION_DENIED:
              output.innerHTML = "You have declined permission to use geolocation";
              break;
          case error.POSITION_UNAVAILABLE:
              output.innerHTML = "Location information is not available";
              break;
          case error.TIMEOUT:
              output.innerHTML = "The request to get your position timed out";
              break;
          case error.UNKNOWN_ERROR:
              output.innerHTML = "An unknown error occurred";
              break;
      }
  }


  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Recipes and Menus page loaded');
});
