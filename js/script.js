$(document).ready(function () {

    function mobileMenuToggle() {
        let menuTrigger = $('.mobile-menu-toggle');

        menuTrigger.click(function () {
            menuTrigger.toggleClass('active');
            $('nav').fadeToggle(300);
            $('.navigation').toggleClass('active');
        });
        $('nav .navigation li').click(function () {
            $('nav').fadeOut(300);
            $('.navigation').removeClass('active');
            menuTrigger.removeClass('active')
        })

    }

    function smoothJump() {
        $("body").on("click", "a", function (event) {
            event.preventDefault();
            $('li').removeClass('active');
            $(this).closest('li').addClass('active');
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });

    }

    function mask() {
        $(".phone_mask").mask("+7 ( 999 ) 999  99  99");
    }

    function pagePiling() {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['home', 'services', 'guarantees', 'works', 'about', 'reviews', 'contacts'],
            navigation: {
                'position': 'right',
                'tooltips': ['home', 'services', 'guarantees', 'works', 'dpa', 'reviews', 'contacts']
            },

        });
    }

    function tabs() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    }

    function slideInf() {
        $('.slide-inf').bxSlider({
            mode: 'fade',
            maxSlides: 1,
            controls: true,
            pager: false
        })
    }

    function sliderGerb() {
        let windowsize = $(window).width();
        if (windowsize > 573) {
            $('.slider-gerb').bxSlider({
                mode: 'horizontal',
                maxSlides: 4,
                minSlides: 4,
                controls: true,
                loop: true,
                pager: false,
                moveSlides: 1,
                slideWidth: 250
            })
        } else {
            $('.slider-gerb').bxSlider({
                mode: 'horizontal',
                maxSlides: 2,
                minSlides: 2,
                controls: true,
                loop: true,
                pager: false,
                moveSlides: 1,
                slideWidth: 250
            })
        }
    }

    function sliderComments() {
        $('.slider-comments').bxSlider({
            mode: 'fade',
            maxSlides: 1,
            minSlides: 1,
            controls: true,
            loop: false,
            pager: true,
            pagerType: 'short',
            moveSlides: 1,
            adaptiveHeight: true,
            pagerShortSeparator: '<span class="t-green">/</span>'
        })
    }

    function chooseServices() {
        $('div.choose-services').on('click', '.col-12:not(.show)', function () {
            $(this)
                .addClass('show').siblings().removeClass('show')
                .closest('body').find('div.popup-services').removeClass('show').eq($(this).index()).addClass('show');
            $('.services').toggleClass('z-auto');
            $('.shadow-overlay').fadeToggle(300);
            $('.shadow-overlay, .popup-services .close').click(function () {
                $('.shadow-overlay').fadeOut(300);
                $('.services').removeClass('z-auto');
                $('.popup-services').removeClass('show');
                $('.col-12').removeClass('show');
            });
        });
    }

    $(window).on('load', function () {
        mask();
        tabs();
        slideInf();
        sliderGerb();
        sliderComments();
        chooseServices();
    });
    $(window).load(function () {
        $(".loader").fadeOut("slow");
    });
    if ($(window).width() > 1200) {
        pagePiling();
        $('section').addClass('pattern');
    }
    if (($(window).width() < 1200) && ($(window).width() > 768)) {
        $('body').addClass('pattern');
    }
    if($(window).width() < 992) {
        mobileMenuToggle();
        smoothJump();
    }
});
