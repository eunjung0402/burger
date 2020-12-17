$(function(){
    $('.open').click(function(){
        $('.popUp').fadeIn();
    });
    
    $('.popUp button').click(function(){
        $('.popUp').fadeOut();
    });
});