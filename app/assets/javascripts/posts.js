
$(document).ready(function(){
  $('.content-submit').prop('disabled', true);
     $cl=$('.close') ;

 $("#image_new").change(function()
 {  console.log('c') ;
   if(this.files && this.files[0])
  {
     $cl.css('display','block') ;
     var reader = new FileReader() ;
    reader.onload =  function(e) {
      $('#preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(this.files[0]) ;
    $('.content-submit').prop('disabled', false);
    $('.content-submit').css({'cursor':'pointer'}) ;


  }


}) ;

  $("#image_alt").click(function(){
    $("#image_new").click() ;}) ;


  $(".search-bar , .search button").focus(function(){
    $(".search button").css({ 'animation': 'colchange 300ms ease-in-out 1 forwards' });
  }) ;
  $(".search-bar , .search button").blur(function(){

    $(".search button").css({ 'animation': 'colchange 300ms ease-in-out 1 reverse' })
  })

 // can also be used for comments
    $('.content').keyup(function() {
       var temp = $('.content').val().replace(/ /g,"") ;
       if(temp != ''||$('#preview').attr('src')!='') {
          $('.content-submit').prop('disabled', false);
          $('.content-submit').css({'cursor':'pointer'}) ;
       }
       else
       {$('.content-submit').prop('disabled', true);
        $('.content-submit').css({'cursor':'default'});
     }
    });

  $cl.click(function(){
     $('#image_new').wrap('<form>').closest('form').get(0).reset(); ;
     $('#image_new').unwrap() ;

     $('#preview').attr('src' , '' ) ;

     $cl.fadeOut();
     var temp = $('.content').val().replace(/ /g,"") ;
     if(temp != ''||$('#preview').attr('src')!='') {
        $('.content-submit').prop('disabled', false);
        $('.content-submit').css({'cursor':'pointer'}) ;
     }
     else
     {$('.content-submit').prop('disabled', true);
      $('.content-submit').css({'cursor':'default'});
   }


      })

//       $('#new_post').click(function(){
// console.log('clicked') ;

// $(this).css({'width':'40vw','position':'absolute','background-color':'white'});
// console.log($(this).css('position'));
// $('.mod_bg').fadeIn('slow') ;
// })
var modal=false;
$('#new_post').click(function(){
if(!modal){
$('.close_modal').css('display','block') ;
$(this).addClass('temp-modal');
$(this).wrap('<div class="mod_bg"></div>');
$('.mod_bg').fadeIn('slow') ;
modal=true;}
}) ;
$('.close_modal').click(function(){
$('#new_post').removeClass('temp-modal') ;
$('mod_bg').fadeOut('slow'); $('.close_modal').css('display','none')
$('#new_post').unwrap() ; modal=false;})





})
