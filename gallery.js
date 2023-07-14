$('#reco').rcarousel({
});

var $container = $('.reco-group');
$container.imagesLoaded(function() { 
    $container.isotope({
        itemSelector: '.movie',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        containerStyle:{
            position:'relative'
        }
    });
});