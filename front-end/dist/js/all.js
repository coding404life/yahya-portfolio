'use strict';
$(document).ready(() => {

    // * ----------------------------------------start------------------------------------------------ *

    //  navbar on scroll code
    // 1- on scroll fire the function navScroll function
    window.onscroll = () => {
        navScroll();
    }
    // 2- get the position of the navbar = 0
    const sticky = $('.navbar').offset();
    const navScroll = () => {
        // 3- if page scroll higher than navbar add class sticky
        if (window.pageYOffset > sticky.top) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    }

    // * ------------------------------------------end---------------------------------------------- *


    // * -------------------------------------------start--------------------------------------------- *
    //latest work section code 
    // 2- when clicking on nav hide and all other content and show content with specific class name
    $('#work-nav').click((e) => {
        //add a class for active to the nav list and remove from others
        $(e.target).addClass('active').siblings().removeClass('active');

        //select the target dataset of the element
        let target = e.target.dataset.link;
        switch (target) {
            case 'web':
                $('#work-content').children().each((i, element) => {
                    if ($(element).hasClass('web')) {
                        $(element).show();
                    } else {
                        $(element).hide();
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
            default:
                $('#work-content').children().each((i, element) => {
                    if (target === 'all') {
                        $(element).show();
                    }
                });
                break;
        }
    });

    // * ---------------------------------------------end------------------------------------------- *


    // * -------------------------------------------start--------------------------------------------- *
    // testimonials slider code
    let clientIndex = 1;

    slide(clientIndex);

    function plusSlides(n) {
        slide(clientIndex += n);
    }

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
        }
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove('active');
        }
        slide[clientIndex - 1].classList.remove('display-none');
        bullets[clientIndex - 1].classList.add('active');
    }
    // * -------------------------------------------end--------------------------------------------- *
});