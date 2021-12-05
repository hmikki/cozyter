/*function openNav() {
    var element = document.getElementById("mySidebar");
    element.classList.toggle("openSidebar");
}*/
function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    //document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginRight= "0";
}
$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
});