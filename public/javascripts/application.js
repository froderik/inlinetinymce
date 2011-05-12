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
    
    // hide the form when submitting - when the ajax calls succeeds 
    // put the returned data in the text field and show it
    $(".editor").submit( function(event){
        $(".editor").hide();
    }).bind("ajax:success", function(event,data,status,xhr){
      $("#fancy_text").html(data);
      $("#fancy_text").show();
    });
    
    
  }
);
