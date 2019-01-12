

$(document).ready(function(){
    var list_slideshow = $("#teacher"),
        listItems = list_slideshow.children('li'),
        listLen = listItems.length,
        i = 0,
        changeList = function () {
            listItems.eq(i).fadeOut(1500, function () {
                i += 1;
                if (i == listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(1500);
            });
        };
    listItems.not(':first').hide();
    setInterval(changeList, 3000);
	
	$("i ul a").hide();
	$(".fa-list-ul").click(function(){
		$("i ul a").toggle(500);
	
	});
	
			$( ".WHO" ).click(function( event ) {
					event.preventDefault();
					$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
				});
		
			$( ".WHAT" ).click(function( event ) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
		});
		
			$( ".WHEN" ).click(function( event ) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
		});
		
			$( ".WHERE" ).click(function( event ) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
		});
		
			$( ".WHY" ).click(function( event ) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
		});
		
			$( ".HOW" ).click(function( event ) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
		});
});