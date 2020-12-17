$(function(){
    //준비중
    $('.box2Btn2').click(function(){
        $('.popUp1').fadeIn();
    });
    
    $('.popUp1 button').click(function(){
        $('.popUp1').fadeOut();
    });
    
    
    //재료선택 삼각형누르면 사라짐
    $('.box2Btn').click(function(){
        $('.box2 ul').slideToggle();
    });
    
    
    //주소창
    $('.box3btn').click(function(){
        $('.popUp2').fadeIn();
    });
    
    $('.popUp2 button').click(function(){
        $('.popUp2').fadeOut();
    });
    
    
    //결제창
    $('.box3btn2').click(function(){
        $('.popUp3').fadeIn();
    });
    
    $('.popUp3 button').click(function(){
        $('.popUp3').fadeOut();
    });
    
    
    //쿠폰창
     $('.box3btn3').click(function(){
        $('.popUp4').fadeIn();
    });
    
    $('.popUp4 button').click(function(){
        $('.popUp4').fadeOut();
    });
    
    
    //버튼누르면 숫자변경
    
    
    
    
    //주문하기
    $('section>button').click(function(){
        location.href="orderOK.html";
    });
});