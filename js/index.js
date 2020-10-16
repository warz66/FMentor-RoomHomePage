var indexCarousel = 0;
carouselNavClick(indexCarousel);

function carouselNavClick(n) {
    indexCarousel += n;
    var i;
    var images = document.querySelectorAll("#carousel-img img");
    var textes = document.querySelectorAll("#carousel-text div");
    if ( indexCarousel > images.length-1) { indexCarousel = 0 }
    if ( indexCarousel < 0) { indexCarousel = images.length-1 }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        textes[i].style.display = "none";
    }
    images[indexCarousel].style.display = "block";
    textes[indexCarousel].style.display = "block";
}

function buttonMenuH() { 
    document.getElementById("menu").classList.toggle("is-active");
    document.getElementById("inactive").classList.toggle("is-inactive");
    console.log(document.getElementById("inactive").classList.contains("is-inactive") );
    if (document.getElementById("inactive").classList.contains("is-inactive") == true) {
        document.getElementById("inactive").style.height = document.body.scrollHeight+"px";
    } else {
        document.getElementById("inactive").style.height = "0px";
    }
}