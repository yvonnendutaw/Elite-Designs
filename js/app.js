$(document).foundation()
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


(function () {
            [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function (ev) {
                //                        ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'menu__item--current')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                // set current
                classie.add(item, 'menu__item--current');
            };

                [].slice.call(menuItems).forEach(function (el) {
            el.addEventListener('click', setCurrent);
        });
    });

            [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function () {
            classie.add(link, 'link-copy--animate');
            setTimeout(function () {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);
