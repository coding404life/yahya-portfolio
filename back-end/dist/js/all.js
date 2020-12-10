'use strict';
$(document).ready(() => {
    // * ----------start navbar click event------------------ *
    // $('#navbarNav ul li a').click(() => {
    //     $('li a').removeClass('active');
    //     $(this).addClass('active');
    // });
    $('nav a[href="/' + location.pathname.split("/")[1] + '"]').addClass('active');

    // * -----------------end navbar click event------------ *

    // * --------------start nav on scroll------------------ *

    // 1- on scroll fire the function navScroll function
    $(window).scroll(function () {
        if ($(document).scrollTop() > 40) {
            $('.navbar').addClass('nav-effect');
        } else {
            $('.navbar').removeClass('nav-effect');
        }
    });
    // * ---------------end nav on scroll------------------- *


    // * -----------------start latest work section----------- *

    // 1- when clicking on nav link show  content and hide content dosent have specefic class name
    $('#work-nav').click((e) => {
        //add a class active to the nav link and remove from others
        $(e.target).addClass('active').siblings().removeClass('active');
        //select the target dataset of the element
        let target = e.target.dataset.link;
        switch (target) {
            case 'all':
                $('#work-content').children().each((i, element) => {
                    if (target === 'all') {
                        $(element).show();
                    }
                });
                break;

            case 'mobile':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('mobile')) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
                break;

            case 'photography':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('photography')) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
                break;

            case 'design':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('design')) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
                break;

            case 'type':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('type')) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
                break;

            case 'web':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('web')) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
                break;
        }
    });
    // * ----------------end latest work section---------------- *


    // * -----------start-testimonials slider code------------ *

    if (location.pathname === '/') {

        let clientIndex = 1;

        slide(clientIndex);
        // if button on click has class prev slide back if has class next slide forward
        $('.next, .prev').click(function (e) {
            if ($(e.target).hasClass("prev")) {
                slide(clientIndex += -1);
            } else {
                slide(clientIndex += 1);
            }
        });

        setInterval(function () {
            slide(clientIndex += 1);
        }, 4000)

        function slide(num) {
            // 1- Select the clients element
            let slide = document.getElementsByClassName("client");
            let bullets = document.querySelectorAll('.bullets ul li');
            if (num > slide.length) {
                clientIndex = 1;
            }
            if (num < 1) {
                clientIndex = slide.length
            }
            // 3- loop throw the 
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.add('display-none')
                // $('.client').addClass('display-none');
            }
            for (let i = 0; i < bullets.length; i++) {
                bullets[i].classList.remove('active');
                // $('.bullets ul li').remove('active');

            }
            slide[clientIndex - 1].classList.remove('display-none');
            bullets[clientIndex - 1].classList.add('active');
        }
        // * -------------end-testimonials slider code---------------- *
    }
});