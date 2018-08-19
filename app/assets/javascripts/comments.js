$(function(){

  $('#comment_content').on('keyup',function(){


       var temp = $(this).val().replace(/ /g,"") ;
       if(temp=='')
       {$(this).next().prop('disabled',true) ; console.log('disabled') ;}
       else
       { $(this).next().prop('disabled',false) ; console.log('enabled') ;}

  })

  $('.post').on('click' , '.lclick',function(){
    $(this).prev().find('input[type="submit"]').click() ;
  })
})
