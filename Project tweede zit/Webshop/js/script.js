// function to create map with position shown
function initMap() {
    let myLatlng = {lat: 37.770374, lng: -122.387269};
    console.log('it should work')
    let mapOptions = {
      zoom: 15,
      center: myLatlng
    };

    let map = new google.maps.Map(document.querySelector('#GoogleMaps'), mapOptions);
    let storeLatLng = new google.maps.LatLng(37.770374, -122.387269);
    let store = new google.maps.Marker({
        position: storeLatLng,
        map: map,
        Title: 'Toggle Center'
    });
    console.log('it really should')
}

window.addEventListener('load', initMap())