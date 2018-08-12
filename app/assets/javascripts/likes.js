$(function(){
  $('.like_it').click(function(){

    var x =$(this).parent().find('.like_click') ;
    x.click() ;
    console.log(x.get()) ;

  })
}) ;
