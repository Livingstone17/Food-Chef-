


var slideIndex = 0 ;
showSlides();


function showSlides() {
    var i;
    
    // get the array of divs with className image-sliderfade//
    var slides = document.getElementsByClassName("image-sliderfade");
    
    // get the array of divs with className dot //
    
    var dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // increase by 1 Global variable
    slideIndex++;
    
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className= dots[i].className.replace("active", "");
        
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active " ;
    
    // change the image every 2 seconds
    setTimeout(showSlides,10000);
    
}

function initMap() {
    // get the location of the restaurant
    var extendedStayAmericanHotel =  {lat: -25.344, lng:131.036};

    // the map, centered at extendedStayAmericaHotel
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: extendedStayAmericanHotel});
    
    //the marker, positioned at extendedStayAmericanHotel
    var marker = new google.maps.Marker({position: uluru, map: map});
}