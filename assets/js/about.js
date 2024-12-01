// team slider start
var teamBox2Sl = new Swiper(".teamBox2Sl", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 800,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        40: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
    },
});
// team slider end
// *********************************************************************************** //

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