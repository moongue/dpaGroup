function mask() {
    $(".phone_mask").mask("+7 ( 9 9 9 ) 9 9 9  9 9  9 9");
}

function pagePiling() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['home', 'services', 'guarantees', 'works', 'dpa', 'reviews', 'contacts'],
        navigation: {
            'position': 'right',
            'tooltips': ['home', 'services', 'guarantees', 'works', 'dpa', 'reviews', 'contacts']
        },

    });
}

function tabs() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
}

$(window).on('load', function () {
    mask();
    pagePiling();
    tabs();
});