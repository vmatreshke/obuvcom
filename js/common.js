head.ready(function() {

// banner

	function banner(){
		var h = $(window).height();
			$('.banner').css('height', h);
	}
	banner();

	$('.banner').on('click', function(){
		$('html, body').animate({
    	  scrollTop: $('.main').offset().top
    	}, 500);
	});

	$('section[data-type="background"]').each(function(){
        var bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / bgobj.data('speed')); 
            
            var coords = ('50% '+ yPos + 'px');

            bgobj.css({ backgroundPosition: coords });
        }); 
    });

// menu

	$('.js-menu-link').on('click', function(){
		$('.menu-wrap').addClass('is-open');
	});
	$('.js-menu-close').on('click', function(){
		$(this).parent('.menu-wrap').removeClass('is-open');
	});

// list
	
	$('.js-catalog-link').on('click', function(){
		$('.list-wrap').addClass('is-open');
	});
	$('.js-list-close').on('click', function(){
		$(this).parent('.list-wrap').removeClass('is-open');
	});	

// sublist
	
	//$('.sublist').hide();
	$('.list li').hover(
		function(){
			$(this).addClass('is-open');
		},
		function(){
			$(this).removeClass('is-open');
		}
	);

// yandex map
    ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.854553, 37.67162],
        zoom: 12,
        controls: []
    }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.854553, 37.67162], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        });

     myMap.geoObjects
        .add(myPlacemark1)
     });   

// resize
	
	$(window).resize(function(){
		banner();
	});	

});