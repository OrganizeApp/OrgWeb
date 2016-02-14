$(document).ready(function(){
		$(".games").focus();
		 $("#createGame").hide();
		 $("#squads").hide();
		 $("#profile").hide();
          // Show chosen div, and hide all others
        $("a").click(function (e) 
        {
                e.preventDefault();
            $("#" + $(this).attr("class")).show().siblings('div').hide();
        });

    });