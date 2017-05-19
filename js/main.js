

	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		var myElement = document.getElementById("catogeries"),
			sd = document.getElementById("DSD");
		myElement.addEventListener("click", function() {
			 $.ajax({
			 	url: "https://developers.zomato.com/api/v2.1/categories",
			 	type: "GET",
			 	headers: {
			 		'Accept': 'application/json',
			 		'user-key': '4202ec87a4e304fe192cf2edf081cbbf'
			 	},
			 	success: function(result){
			 		var items = '';

				      if (result.categories) {
				        for (i=0 ; i < result.categories.length; i++) {
				        	 items = items + result.categories[i]["categories"].id + "   "+ result.categories[i]["categories"].name;
				        }
				        sd.innerText = sd.innerText + items;
				      }
		    	}
			});
		});

		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });
    
    };
