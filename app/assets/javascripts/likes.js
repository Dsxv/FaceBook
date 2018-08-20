
$(function(){


$('.post').on('click','.like_it',function(){


 var x =$(this).parent().find('.like_click') ;

 x.click() ;
})




  $('.post').on('click' , '.lclick',function(){

    console.log('clicked1') ;
    $(this).prev().find('input[type="submit"]').click() ;

  }) ;
}) ;
