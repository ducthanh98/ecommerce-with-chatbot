;(function ($) {
    "use strict";

    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);


        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });


        /*---------------------
            Back To Top
        ----------------------*/
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 2000);
        });

    });
    // let e = document.createElement("script"),
    //     t = document.head || document.getElementsByTagName("head")[0];
    // (e.src =
    //     "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
    //     // Replace 1.x.x with the version that you want
    //     (e.async = !0),
    //     (e.onload = () => {
    //         window.WebChat.default(
    //             {
    //                 customData: {language: "vi"},
    //                 socketUrl: "http://localhost:5005",
    //                 title:"Bot"
    //                 // add other props here
    //             },
    //             null
    //         );
    //     }),
    //     t.insertBefore(e, t.firstChild);

})(jQuery);