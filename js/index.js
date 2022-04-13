// Menu button 
$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    $('.submit').click(function (event) {
        event.preventDefault('Clicked button')
        
        var name = $('.name').val()
        var email = $('.email').val()
        var phone = $('.phoneNumber').val()
        var message = $('.message').val()

    })

});

var i = 0;
var j = 0;
var txt1 = 'To provide Simple Reliable Creative solution to our clients, We the SPAR stand here to deliver technology and the best Hardware service in everyone’s life.';
var txt2 = 'We are a team who have come up with a goal to introduce & deliver technology as well as Hardware service with our aim to keep it Simple Reliable & Creative with the best and seamless services.';
var speed = 40;

window.onload = function typeWriter() {
    if (i < txt1.length || j < txt2.length ) {
        document.getElementById('vision').innerHTML += txt1.charAt(i);
        i++;  
        document.getElementById('us').innerHTML += txt2.charAt(j);
        j++;    
        setTimeout(typeWriter, speed);
    }
}

// function initMap() {
//     // The location of Uluru
//     var uluru = { lat: 21.112934, lng: 79.104184 };
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 4, center: uluru });
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({ position: uluru, map: map });
// }

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(21.112934, 79.104184),
//         zoom: 5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }
