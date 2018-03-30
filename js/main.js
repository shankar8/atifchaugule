
$(function() {


// var navigation = $(".navigation");

//------------------burger menu--------------------------------------//
				
// $('.navicon').click(function() {
//     $('.navicon').toggleClass('blueburger').toggleClass('cross');    
//     $('nav').toggleClass('navDark');
//     navigation.toggleClass('navToggle');    
// });

// $('ul li a').click(function() {
//     console.log('navtttt');
//     $('nav').removeClass('navDark');
//     navigation.removeClass('navToggle');
//     $('.navicon').addClass('blueburger').removeClass('cross');                       
// });

// $('.navigation.navToggle li a').click(function() { 
//     console.log('what is wrong?');
// });



//------------------scroll animations--------------------------------------//


// var heroTextTop = $('#home .hero-text h3').offset().top;
// var heroSectionBottom = $('.hero-section').height(),
//     serviceUmbrellaTop = $('.service-umbrella').offset().top;

    // console.log(serviceUmbrellaTop);

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if (wScroll > 150){       

        $('.flipper').each(function(i){

            setTimeout(function(){
                $('.flipper').eq(i).addClass('is-showing');        
            }, (700*(Math.exp(i*0.20)) - 700));

        });

    } 
   
  


// sevice area animation
    // if(wScroll > $('.service-area').offset().top - ($(window).height() / 1.2)) {
            
    //     $('.service-icons').each(function(i){
    //         setTimeout(function(){
    //         $('.service-img-box').eq(i).addClass('is-showing');
    //         }, (700 * (Math.exp(i * 0.14))) - 700);
    //     });

    // }

// client section animation
    // if(wScroll > $('.client-section').offset().top - ($(window).height() / 1.2)) {
        
    // $('.client-box').each(function(i){
    //     setTimeout(function(){
    //     $('.client-box').eq(i).addClass('is-showing');
    //     }, (700 * (Math.exp(i * 0.14))) - 700);
    // });

// }





});//end of windows scroll



});















