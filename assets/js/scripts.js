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
$(".sub").click(function(e) {
    e.preventDefault();
    $("#openSWAL").click();
});
function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        rtl:true,
        autoplay:false,
        autoplayTimeout:3000,
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
                items:8
            },
            1200:{
                items:8
            }
        }
    });

    $("#amg").click(function(e) {
        var button = $("#qr-reader__dashboard_section_csr button");
        button[0].click();
        //$("#amg")[0].style.display="none";
    });
});





$('#r11').on('click', function(){
    $(this).parent().find('a').trigger('click')
  })
  
  $('#r12').on('click', function(){
    $(this).parent().find('a').trigger('click')
  })

  var counter = 0;
   
  $(document).ready(function() {

      $(".addMe").click(function(){
          counter++;

        //   $(".theCount").text(counter);

          $(this).parent().find('.theCount').text(counter);

      });
        
      $(".main").click(function(){
          if(counter != 0 ){
            counter--;

          }

          $(this).parent().find('.theCount').text(counter);
    });
    
    $(".card").click(function(){
                    $(this).find('.new').slideToggle();

       
    });
  
  });


 