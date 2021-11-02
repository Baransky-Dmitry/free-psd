$(document).ready(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase:'linear'
    });

    $('input, select').styler();
    
});