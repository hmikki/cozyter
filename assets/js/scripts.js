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
$("#amg").click(function(e) {
    $("#qr-reader").click();
});


$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        rtl:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:0,
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





