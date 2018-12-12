var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function removeSlide(n) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slide = document.getElementById(`slide${n}`)
    var dot = document.getElementById(`dot${n}`)

    slide.parentNode.removeChild(slide);
    dot.parentNode.removeChild(dot);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function checkMobileSreenSize(mobile) {
    if (mobile.matches) {
        var blocks = document.getElementsByClassName('block');
        var slideshowContainer = document.getElementById("slideshow-container");

        slideshowContainer.id = "new-slideshow-container";
        slideshowContainer.style.position = 'fixed';
        slideshowContainer.style.bottom = '470px';
        slideshowContainer.style.width = '90%';
        slideshowContainer.style.right = '7px';

        for (i = 0; i < blocks.length; i++) {
            blocks[i].style.position = 'relative';
            blocks[i].style.top = '200px';
        }

        document.getElementById("main-container").appendChild(slideshowContainer);
    }
}


function checkDesktopScreenSize(desktop) {
    var slideshowContainer = document.getElementById("new-slideshow-container");
    if (desktop.matches && slideshowContainer) {
        var blocks = document.getElementsByClassName('block');
        slideshowContainer.id = "slideshow-container";

        slideshowContainer.style.position = '';
        slideshowContainer.style.bottom = '';
        slideshowContainer.style.width = '';

        for (i = 0; i < blocks.length; i++) {
            blocks[i].style.position = '';
            blocks[i].style.top = '';
        }

        document.getElementById("block2").appendChild(slideshowContainer);
    }
}

var mobile = window.matchMedia("(max-width: 400px)");
checkMobileSreenSize(mobile);
mobile.addListener(checkMobileSreenSize);

var desktop = window.matchMedia("(min-width: 700px)");
checkDesktopScreenSize(desktop);
desktop.addListener(checkDesktopScreenSize);