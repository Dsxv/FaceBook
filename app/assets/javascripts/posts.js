
$(document).ready(function(){

 $("#image_new").change(function()
 { if(this.files && this.files[0])
  {  var reader = new FileReader() ;
    reader.onload =  function(e) {
      $('#preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(this.files[0]) ;
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


  $("#navbar").click(function(){
    $(".modal-this").click() ;
  }) ;
  })
