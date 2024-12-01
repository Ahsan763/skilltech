var latestAppSl = new Swiper(".latestAppSl", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 900,
    loop:true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        40: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        1024: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        1199: {
            spaceBetween: 20,
            slidesPerView: 3,
        }
    },
});