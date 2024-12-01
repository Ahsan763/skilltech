// saying slider start
var sayingSl = new Swiper(".sayingSl", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 900,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
        },
    },
});
// saying slider end
// *********************************************************************************** //