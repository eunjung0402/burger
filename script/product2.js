$(function(){
    
    $('.box ul li').click(function(){
        $('.box ul li').removeClass('on');
        $(this).addClass('on');
    });
    
    $('.box ul li').eq(0).click(function(){
        $('.pTxt').show();
        $('.review').hide();
    });
    
    $('.box ul li').eq(1).click(function(){
        $('.pTxt').hide();
        $('.review').show();
    });
    
    
    $('section button').click(function(){
        location.href="order.html";
    });
});