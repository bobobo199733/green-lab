jQuery(function($) {

    // Custom click function based on CSS3 and Material Design
    var element, circle, d, x, y;
    $("button span, a span").click(function(e) {

        element = $(this);

        if (element.find(".circle").length == 0)
            element.prepend("<span class='circle'></span>");

        circle = element.find(".circle");
        circle.removeClass("animate");

        if (!circle.height() && !circle.width()) {
            d = Math.max(element.outerWidth(), element.outerHeight());
            circle.css({
                height: d,
                width: d
            });
        }

        x = e.pageX - element.offset().left - circle.width() / 2;
        y = e.pageY - element.offset().top - circle.height() / 2;

        circle.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });

    /**
     * Change menu image based on mouse hover
     * Copyright eindbazen @ Webreact :-)
     *
     * @todo: this should be cleaned up once all the images are fixed by mobico.
     */
    $('.header-nav > li > ul > li > ul > li > a, .header-nav > li > ul > li > a').hover(function() {

        const $this = $(this);

        // Hover over code
        const item = $this.text();

        // TODO: remove these after we have migrated all images.
        var dir = 'https://mobico.nl/wp-content/themes/mobico/assets/img/';
        var src = '';

        if ($this.data('image')) {
            $(".dropdown-image-column img").attr("src", $this.data('image'));
            return;
        }

        // TODO: Remove these after full migration of images.
        switch (item) {

            // Parent iterms
            case 'iPhone 4':
                src = 'iphone_4.jpg';
                break;
            case 'iPhone 5':
                src = 'iphone_5.jpg';
                break;
            case 'iPhone SE':
                src = 'iphone_se.jpg';
                break;
            case 'iPhone 6 en 6s':
                src = 'iphone_6.jpg';
                break;
            case 'iPhone 7':
                src = 'iphone_7.jpg';
                break;
            case 'iPhone 8':
                src = 'iphone_8.jpg';
                break;
            case 'iPhone X en XR':
                src = 'iphone_x.jpg';
                break;
            case 'iPhone Xs en Xs Max':
                src = 'iphone_xs.jpg';
                break;
            case 'iPhone 11 en 11 Pro':
                src = 'iphone_11.jpg';
                break;
            case 'iPhone 12 en 12 Pro':
                src = 'iphone_12.jpg';
                break;

                // Child items
            case 'iPhone 7':
                src = 'iphone_7.jpg';
                break;
            case 'iPhone 7 Plus':
                src = 'iphone_7_plus.jpg';
                break;
            case 'iPhone 8':
                src = 'iphone_8.jpg';
                break;
            case 'iPhone 8 Plus':
                src = 'iphone_8_plus.jpg';
                break;
            case 'iPhone X':
                src = 'iphone_x.jpg';
                break;
            case 'iPhone Xr':
                src = 'iphone_xr.jpg';
                break;
            case 'iPhone Xs':
                src = 'iphone_xs.jpg';
                break;
            case 'iPhone Xs Max':
                src = 'iphone_xs_max.jpg';
                break;
            case 'iPhone 11':
                src = 'iphone_11.jpg';
                break;
            case 'Refurbished iPhone 11 Pro':
                src = 'iphone_11pro.jpg';
                break;
            case 'iPhone 11 Pro Max':
                src = 'iphone_11pro.jpg';
                break;
            case 'iPhone 12 en 12 Pro':
                src = 'iphone_12.jpg';
                break;
            case 'iPhone 12 Mini':
                src = 'iphone_12_mini.jpg';
                break;
            case 'iPhone 12':
                src = 'iphone_12.jpg';
                break;
            case 'iPhone 12 Pro':
                src = 'iphone_12_pro.jpg';
                break;
            case 'iPhone 12 Pro Max':
                src = 'iphone_12_pro_max.jpg';
                break;
            default:
                src = 'iphone_7.jpg';
        }

        $(".dropdown-image-column img").attr("src", dir + src);

    });
});