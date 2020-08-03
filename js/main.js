$(document).ready(function() {

    const body = $('body')
    const popupCallback = $('#popup_callback')
    const popupThanks = $('#popup_thanks')
    const cart = $('#cart')
    const menu = $('#menu')
    const search = $('#search')
    const tile = $('.tile')
    const counter = $('.counter')
    const documentWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    
    // MENU
    if (menu.length) {

        $(document).on('click', function(e) {
            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu')) {
                body.toggleClass('overflow')
                menu.toggleClass('menu--open')
            }
        })
    }

    // HEADER
    // Set the width of the 'subnav' blocks
    // if ($('.subnav').length) {
    //     const headerMenuBtn = $('.header__menu')[0].clientWidth
    //     const headerLogo = $('.header__logo')[0].clientWidth
    //     let subnavWidth = 100 - ((headerMenuBtn + headerLogo))*100/documentWidth
    //     $('.subnav').css('width', `${subnavWidth}vw`)
    // }

    // POPUP CALLBACK and THANKS
    if (popupCallback.length) {
        const callbackForm = popupCallback.find('#callback')

        callbackForm.on('submit', function() {
            popupThanks.css({
                "opacity": 1,
                "pointer-events": "default"
            })
            setTimeout(function() {
                popupThanks.css({
                    "opacity": 0,
                    "pointer-events": "none"
                })
            }, 3000)
        })

        $(document).on('click',function(e) {
            if ($(e.target).closest('.callback__btn').length || $(e.target).hasClass('popup_callback')) {
                body.toggleClass('overflow')
                popupCallback.toggleClass('popup_callback--active')
            }

            // POPUP THANKS
            if ($(e.target).hasClass('popup_thanks')) {
                popupThanks.css({
                    "opacity": 0,
                    "pointer-events": "none"
                })
            }
        })
    }

    // SEARCH
    if (search.length) {

        $(document).on('click', function(e) {
            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                body.toggleClass('overflow')
                search.toggleClass('search--open')
            }
        })
    }

    // CART
    if (cart.length) {

        $(document).on('click', function(e) {
            if ($(e.target).closest('.cart__btn').length || $(e.target).hasClass('cart')) {
                body.toggleClass('overflow')
                cart.toggleClass('cart--open')
            }
            if ($(e.target).closest('.remove_item').length) {
                $(e.target).closest('.cart__order_item').slideToggle(500)
                setTimeout(function() {
                    $(e.target).closest('.cart__order_item').remove()
                }, 1000);
            }
        })
    }

    //  Handler adding the product to the cart (TILE - CART)
    if (tile.length) {
        $(document).on('click', '.tile__cart_btn', function() {
            const cartItem = $('<li class="cart__order_item"></li>')
            const copyTile = $(this).closest('.tile').clone()
            const removeBtn = $('<div class="remove_item"></div>')
            cartItem.append(copyTile).append(removeBtn)
            cart.find('.cart__order_list').append(cartItem)
        })
    }

    // COUNTER
    if (counter.length) {

        $(document).on('click', function(e) {

            if ($(e.target).closest('.counter')) {
                const input = $(e.target).closest('.counter').find('input')[0]
    
                if ($(e.target).closest('.counter_subtract').length && input.value > 1) {
                    input.value = --input.value
                }
                if ($(e.target).closest('.counter_add').length) {
                    input.value = ++input.value
                }
            }
        })
    }

    // HOME main slider
    if ($('.home__slider_list').length) {
        $('.home__slider_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 0,
            arrows: false,
            draggable: false,
            dots: true,
            dotsClass: 'home__slider_pagination',
            speed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        infinite: true
                    }
                },
            ]
        });
    }

    // HOME tile section (sale)
    if ($('.slider__tile_sale').length) {
        $('.slider__tile_sale').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        rows: 2,
                        arrows: false,
                    }
                },
            ]
        })
        .on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
    }

    // HOME tile section (new)
    if ($('.slider__tile_new').length) {
        $('.slider__tile_new').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        rows: 2,
                        arrows: false,
                    }
                },
            ]
        })
        .on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
    }

    // HOME tile section (top)
    if ($('.slider__tile_top').length) {
        $('.slider__tile_top').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        rows: 2,
                        arrows: false,
                    }
                },
            ]
        })
        .on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
    }

    // PRODUCT PAGE
    // Preview tabs (photo)
    if ($("#product__preview").length) {

        let img, 
            container = $('.product__photo_inner')

        $("#product__preview").click(function(e) {
            if ($(e.target).closest('.product__preview_item')) {
                img = $(e.target).closest('.product__preview_item').find('.product__preview_img')
                src = img.attr('src')
                container.find('img').attr('src', src)
            }
        })
    }

    // Preview tabs and panes (description)
    if ($("#product__description").length) {

        const tabs = $('.product__tab_item')
        const items = $('.product__description_item')

        tabs.first().addClass('is-active')
        items.first().addClass('is-active')

        $(document).on('click', '#product__description', function(e) {
            if ($(e.target).closest('.product__tab_item').length) {
                tabs.removeClass('is-active')
                $(e.target).closest('.product__tab_item').addClass('is-active')
                items.removeClass('is-active')

                let index = tabs.index(e.target)
                items[index].classList.add('is-active')
            }
        })

        $(document).on('click', '.product__description_tab', function() {
            $(this).next().slideToggle()
        })
    }

    // Product preview slider (mobile version)
    if ($('.product__preview_list').length
        && document.documentElement.clientWidth < 768) {
        $('.product__preview_list').slick({
            // slidesToShow: 4,
            // slidesToScroll: 1,
            // arrows: true,
            // draggable: true,
            // infinite: true,
            // speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
            ]
        });
    }

    // New product slider
    if ($('.new__list').length) {
        $('.new__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1442,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
            ]
        })
        .on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
    }

    // Similar product slider
    if ($('.similar__body_list').length) {
        if ($('.similar__body_item').length == 1) {
            $('.similar__body_list').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                infinite: true,
                speed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    },
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                ]
            })
            .on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        } else if ($('.similar__body_item').length == 2) {
            $('.similar__body_list').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                infinite: true,
                speed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    },
                ]
            })
            .on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        } else {
            $('.similar__body_list').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                infinite: true,
                speed: 2000,
                responsive: [
                    {
                        breakpoint: 1026,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    },
                ]
            })
            .on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        }
    }

    // Product buy (show/hide the description of the "buy" block)
    if ($('.product__buy_body_description').length) {
        let btn = $('.product__buy_body_more')
        let description = $('.product__buy_body_description')
        let paragraph = description.find('.product__buy_body_description_paragraph')
        let height = parseFloat(paragraph.css("line-height")) * 3

        description.css({"height": `${height}px`})

        btn.on('click', function(e) {
            if($(e.target).closest('.product__buy_body_more') && description.hasClass('product__buy_body_description--toggled')) {
                description.removeClass('product__buy_body_description--toggled')
                description.animate({"height": `${paragraph.innerHeight()}px`})
            } else {
                description.addClass('product__buy_body_description--toggled')
                description.animate({"height": "60px"})
            }
        })
    }

    // CATALOG page
    // Dropdown elements for filter block
    if ($('.sidebar').length) {
        $('.filter__dropdown').on('click', function(e) {
            if ($(e.target).hasClass('filter__dropdown_title')) {
                $(this).toggleClass('filter__dropdown--open')
                $(this).find('.filter__dropdown_description').slideToggle()
            }
        })
        $(document).on('click', '.filter_btn', function() {
            $('.sidebar__body').toggleClass('is-active')
            body.toggleClass('overflow')
        })
        $(document).on('click', '.ocf-option-name', function() {
            $(this).next().slideToggle()
        })
    }

    // Product display mode switch (grid or lines)
    if ($('#toggle').length) {
        const toggle = $('#toggle')
        const catalog = $('.product')

        toggle.on('click', function(e) {
            if ($(e.target).closest('.settings__grid_icon').length) {
                $(this).find('.settings__grid_icon').removeClass('settings__grid_icon--active')
            }
            if (!$(e.target).hasClass('settings__grid_icon--active') && $(e.target).closest('.settings__grid_icon').is('#toggle_grid')) {
                $(e.target).closest('.settings__grid_icon').addClass('settings__grid_icon--active')
                catalog.removeClass('product--line')
            }
            if (!$(e.target).hasClass('settings__grid_icon--active') && $(e.target).closest('.settings__grid_icon').is('#toggle_line')) {
                $(e.target).closest('.settings__grid_icon').addClass('settings__grid_icon--active')
                catalog.addClass('product--line')
            }
        })
    }
})