var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function () {
    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('.full');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

function check() {
    var name = document.getElementById(name).value;
    var address = document.getElementById(address).value;
    var phone = document.getElementById(phone).value;
    var email = document.getElementById(email).value;
    var total = document.getElementById(total).value;
    if (name == "") {
        alert("Username is obligatory");
        return false;
    }
    if (address == "") {
        alert("Address is obligatory");
        return false;
    }
    if (phone == "") {
        alert("Phone number is obligatory");
        return false;
    }
    if (email == "") {
        alert("Email is obligatory");
        return false;
    }
    if (total == "") {
        alert("Please Choose Your Province");
        return false;
    }
    return true;
}

function toggle() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        responsiveClass: true,
        touchDrag: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
    $("a.scrollLinkmobile").click(function (event) {
        event.preventDefault();
        var x = document.getElementById("nav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
        var overlay = document.querySelector('.overlay');
        var nav = document.querySelector('.full');
        var icon = document.querySelector('.menu-toggle i');

        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");

        if (changeIcon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

            changeIcon = false;
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
    $("input[name=problems]").change(function () {
        var max = 3;
        if ($("input[name=problems]:checked").length == max) {
            $("input[name=problems]").attr('disabled', 'disabled');
            $("input[name=problems]:checked").removeAttr('disabled');
        } else {
            $("input[name=problems]").removeAttr('disabled');
        }
    });


});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

//function scrollAppear() {
//    var contentleft = document.querySelector('.content-text-left');
//    var contentright = document.querySelector('.content-text-right');
//    var contentleft2 = document.querySelector('.content-text-left2');
//    var contentright2 = document.querySelector('.content-text-right2');
//    var claim = document.querySelector('.claim');
//    var contentPositionleft = contentleft.getBoundingClientRect().top;
//    var contentPositionright = contentright.getBoundingClientRect().top;
//    var contentPositionleft2 = contentleft2.getBoundingClientRect().top;
//    var contentPositionright2 = contentright2.getBoundingClientRect().top;
//    var claimPosition = claim.getBoundingClientRect().top;
//    var screenPosition = window.innerHeight / 1.3;
//    var screenPositionc = window.innerHeight / 0.8;
//    if (contentPositionleft < screenPosition) {
//        contentleft.classList.add('appear');
//    }
//    if (contentPositionright < screenPosition) {
//        contentright.classList.add('appear');
//    }
//    if (contentPositionleft2 < screenPosition) {
//        contentleft2.classList.add('appear');
//    }
//    if (contentPositionright2 < screenPosition) {
//        contentright2.classList.add('appear');
//    }
//    if (claimPosition < screenPositionc) {
//        claim.classList.add('claim-appear');
//    }
//}

//window.addEventListener('scroll', scrollAppear);