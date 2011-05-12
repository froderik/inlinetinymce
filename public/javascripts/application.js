// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// called by jquery when the document has loaded - sets up all de ztuff
$(document).ready(
  function(){
    $(".content").hover( 
      function(event){
        $(this).addClass("selectForEditing");
      }, 
      function(event){
        $(this).removeClass("selectForEditing");
      }
    );
    
    $(".content").click( function(event){
      $(".content").hide();
      $(".editor").show();
    });
    
  }
);
