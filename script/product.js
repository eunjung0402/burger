$(function(){
    //메뉴 'on'
    
    $('.pMenu li').click(function(){
        $('.pMenu li').removeClass('on');
        $(this).addClass('on');
    });
    
    $('.pMenu li').eq(0).click(function(){
        $('.box table').hide();
        $('.setT').show();
    });
    
    $('.pMenu li').eq(1).click(function(){
        $('.box table').hide();
        $('.setO').show();
    });
    
    $('.pMenu li').eq(2).click(function(){
        $('.box table').hide();
        $('.setS').show();
    });
    
});