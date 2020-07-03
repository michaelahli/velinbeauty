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
                items: 3,
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



});