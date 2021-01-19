$('.testing').owlCarousel({
    // center: true,
    loop:false,
    margin:10,
    nav:true,
    // autoplay:false,
    // autoplayTimeout:5000,
    // autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })