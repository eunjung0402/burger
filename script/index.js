$(function(){
    $('.one').hide();
    $('.side').hide();
    $('.fastOrder h3').click(function(){
        $('.fastOrder h3').removeClass('on');
        $(this).addClass('on');
    });
    
    $('.fastOrder h3').eq(0).click(function(){
        $('.one').hide();
        $('.side').hide();
        $('.set').show();
    });
    
    $('.fastOrder h3').eq(1).click(function(){
        $('.set').hide();
        $('.side').hide();
        $('.one').show();
    });
    
    $('.fastOrder h3').eq(2).click(function(){
        $('.one').hide();
        $('.set').hide();
        $('.side').show();
    });
    
    $('.menu').click(function(){
        $('.drawer').fadeIn();
    });
    
    $('.drawer button').click(function(){
        $('.drawer').fadeOut();
    });
    
    $('.login').click(function(){
        location.href="login.html";
    });
    
    $('footer button').click(function(){
       location.href="#";
    });
    
    $('section>button').click(function(){
        location.href="order.html";
    });
    
    $('.order').click(function(){
        location.href="order.html";
    });
    
    $('.back').click(function(){
        history.back()
    });
    
    
    $('.btnOder').click(function(){
        location.href="order.html";
    });
});