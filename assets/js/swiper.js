let SwiperTop = new Swiper('.heroSwiper', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: '2.2',
    allowTouchMove: false,
    disableOnInteraction: true
});


var swiper = new Swiper(".cafeSwiper", {
    loop: true,
    spaceBetween: 25,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-pre',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.4,
        },
        480: {
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 3.4,
        },
    },
});

var swiper = new Swiper(".commentSwiper", {
    loop: true,
    spaceBetween: 25,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-pre',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".tourImgSwiper", {
    loop: true,
    spaceBetween: 25,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-pre',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        480: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});


