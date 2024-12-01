// *********************************************************************************** //
const cloudSerBox2InnerR1btn = document.querySelector('.cloudSerBox2InnerR1-btn');
const cloudSerBox2InnerR1ab = document.querySelector('.cloudSerBox2InnerR1-btn-ab');
cloudSerBox2InnerR1btn.addEventListener('click', function(){
    cloudSerBox2InnerR1ab.classList.toggle('active');
});
// *********************************************************************************** //
var webdproSl = new Swiper(".webdproSl", {
    slidesPerView: 3,
    spaceBetween: 40,
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
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1023: {
            spaceBetween: 40,
        }
    },
});