var firstSSOpen = false;

$(document).ready(function() {

	var activeScheme = $('#theme').attr("href").substring(18); 
	activeScheme = activeScheme.substring(0,activeScheme.length-4); 
	activeScheme = activeScheme.split('-');

	var activeColor = activeScheme[2],
		activeFont = activeScheme[1];

	$('head').append('<link rel="stylesheet" type="text/css" href="assets/styleswitcher/styleswitcher.css">');
	$("body").append('<div id="style-switcher"></div>');
	$("#style-switcher").load( "assets/styleswitcher/styleswitcher.html", function(){

		var activeScheme = $('#theme').attr("href").substring(18); 
		activeScheme = activeScheme.substring(0,activeScheme.length-4); 
		activeScheme = activeScheme.split('-');

		var activeColor = activeScheme[2],
			activeFont = activeScheme[1];

		var $colorSwitcher = $('#color-switcher'),
			$fontSwitcher = $('#font-switcher');

		$colorSwitcher.find('a').each(function() {
	        if($(this).data('color')==activeColor) $(this).addClass('active');
	    });
		
		$fontSwitcher.find('a').each(function() {
	        if($(this).data('font')==activeFont) $(this).addClass('active');
	    });

		$('#style-switcher ul').find('a').on('click', function(){
			$(this).parents('ul').find('a.active').removeClass('active');
			$(this).addClass('active');
			setStyle();
			return false;
		});

		var setStyle = function() {
			activeColor = $colorSwitcher.find('a.active').data('color');
			activeFont = $fontSwitcher.find('a.active').data('font');

			$('#theme').attr('href','assets/css/themes/theme-'+activeFont+'-'+activeColor+'.css');
		}

		$('#style-switcher .ss-toggle').click(function(){
			var div = $('#style-switcher');
			if (!firstSSOpen) preLoadStyles();
			if (div.css('right') === '-175px') {
				$('#style-switcher').animate({
					right: '0'
				});
				$(this).toggleClass('active');
			} else {
				$('#style-switcher').animate({
					right: '-175px'
				});
				$(this).toggleClass('active');
			}
			firstSSOpen = true;
			return false;
		});

	});

	function preLoadStyles() {
		if (activeFont=='serif') $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">'); 
		else $('head').append('<link href="https://fonts.googleapis.com/css?family=Lora:400,400i" rel="stylesheet">'); 
	}

});
