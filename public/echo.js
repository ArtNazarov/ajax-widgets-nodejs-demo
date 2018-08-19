$(document).ready(function(){
  $(".echo").each( function(index, elem){
    var itemId = $(elem).data('id');
    $.get("/echoService?id=" + itemId, function(response){
      //console.log(response);
      $(elem).html(response);
    });
  });
});