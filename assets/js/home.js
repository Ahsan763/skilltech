// faq accordian start
// *********************************************************************************** //
const faqAccorhdrList = document.querySelectorAll('.faqAccorhdr');
faqAccorhdrList.forEach(function(faqAccorhdr) {
    faqAccorhdr.addEventListener('click', function() {
        faqAccorhdrList.forEach(function(element) {
            element.classList.remove('active');
        });
        this.classList.add('active');
    });
});
// faq accordian end
// *********************************************************************************** //
// *********************************************************************************** //
const cloudSerBox2InnerR1btn = document.querySelector('.cloudSerBox2InnerR1-btn');
const cloudSerBox2InnerR1ab = document.querySelector('.cloudSerBox2InnerR1-btn-ab');
cloudSerBox2InnerR1btn.addEventListener('click', function(){
    cloudSerBox2InnerR1ab.classList.toggle('active');
});
// *********************************************************************************** //
// skills slider start
var skilsSl = new Swiper(".skilsSl", {
    slidesPerView: 12,
    spaceBetween: 10,
    // autoplay:true,
    loop:true,
    breakpoints: {
        40: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 7,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 10,
        }
    },
});
// skills slider end
// *********************************************************************************** //
// clients slider start
var clientsSl = new Swiper(".clientsSl", {
    slidesPerView: 8,
    spaceBetween: 10,
    speed: 800,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        40: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 7,
        },
        1200: {
          slidesPerView: 8,
        },
    },
});
// clients slider end
// *********************************************************************************** //
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
// news slider start
var newsBox2 = new Swiper(".newsBox2", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 900,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            spaceBetween: 30,
        },
    },
});
// news slider end
// *********************************************************************************** //

// news slider start
var servBoxSl = new Swiper(".servBoxSl", {
    slidesPerView: 1,
    speed: 900,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
// news slider end
// *********************************************************************************** //