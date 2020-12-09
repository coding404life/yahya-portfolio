'use strict';
$(document).ready(() => {
    // * --------------------------------------start navbar click event------------------------------- *
    $('#navbarNav ul').click(function (e) {
        e.preventDefault();
        $(e.target).addClass('active').parent().siblings().children().removeClass('active');
    });

    // * --------------------------------------end navbar click event------------------------------- *


    // * --------------------------------------start nav on scroll------------------------------- *

    // 1- on scroll fire the function navScroll function
    $(window).scroll(() => {
        navScroll();
    });
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
    // * ---------------------------------end nav on scroll---------------------------------- *


    // * --------------------------start latest work section------------------------------------ *

    // 1- when clicking on nav link show  content and hide content dosent have specefic class name
    $('#work-nav').click((e) => {
        //add a class active to the nav link and remove from others
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
    // * ------------------------------------end latest work section--------------------------- *


    // * ---------------------------------start-testimonials slider code------------------------------- *
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
    // * ----------------------------------end-testimonials slider code------------------------------ *
});