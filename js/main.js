$(function (){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="click__btn click-next"></button>',
        prevArrow: '<button type="button" class="click__btn click-prev"></button>',
        infinite: false,
    });
    $('select').styler();
    $('.header__btn-menu').on('click', function (){
        $('.menu ul').slideToggle();
    })
})