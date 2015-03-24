$(document).ready(function () {
  $("#GatedFormContainer").css("opacity", "0");
  
  var checkExist = setInterval(function() {
    if ($('#C_FirstName').length) {
      clearInterval(checkExist);
      setTimeout(function () { initFormInteractions() }, 500);
    }
  }, 100);
  
  function initFormInteractions () {
    $("#GatedFormContainer").css("opacity", "1");
    
    $("select option:first-child").empty(); // Blank first option in all select inputs
    $("select").parent().addClass("dropdown-arrow");
    $(".disabled").parent().css("opacity","0.75");
    
    var input = $("input, select");
    
    input.focusin(function () {    
      var label = $(this).parent().siblings().eq(0);
      label.css("transform", "translateX(calc(-100% - 40px))");
      label.css("color","black");
      label.css("font-weight","600");
    });
    
    input.focusout(function () {
      if ($.trim($(this).val()) == '') {
        var label = $(this).parent().siblings().eq(0);
        label.css("transform", "none");
        label.css("color","#999");
        label.css("font-weight","300");
      }
    });
    
    blankFirstOption ();
    
  }
});

function blankFirstOption () {
  $("#C_Department1").change(function(){
    $("#C_Job_Role11").parent().css("opacity","1").parent().css("opacity","1");
    if ($.trim($("#C_Job_Role11").val()) == '') {
      var label = $("#C_Job_Role11").parent().siblings().eq(0);
      label.css("transform", "none");
      label.css("color","#999");
      label.css("font-weight","300");
    }
    $(".disabled").parent().css("opacity","0.75");
    $("#C_Job_Role11 option:first-child").empty();
    
    blankFirstOption ();
  });
}
;
