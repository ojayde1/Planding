$('#portfolio-carousel').owlCarousel({
     loop:true,
     margin:20,
     dots:false,
     nav:false,
     smartSpeed: 1000,
     autoplay:true,
     autoplayTimeout:4000,
     autoplayHoverPause:false,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     }
 })


 $('#reviews-carousel').owlCarousel({
     loop:true,
     margin:20,
     nav:false,
     smartSpeed: 1000,
     autoplay:true,
     autoplayTimeout:4000,
     autoplayHoverPause:false,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:2
         }
     }
 })
