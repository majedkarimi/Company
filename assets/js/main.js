/* -------------------------------------
# reponsive menu 
---------------------------------------*/
const openMenu = $('.fa-bars');
const closeMenu = $('.fa-times');
const menuBox = $('.nav-menu');
const overlay = $('.mobile-nav-overly');
const menu = $('.mbl-menu');

//responsive menu
$(document).ready(function () {
    menu.click(function () {
        menuBox.fadeToggle();
        overlay.fadeToggle();
    });
    overlay.click(function () {
        menuBox.fadeOut();
        overlay.fadeOut();
        closeMenu.hide(500);
        openMenu.show(500);
    });
});



// add and remove bars
$(document).ready(function () {
    openMenu.click(function () {
        $(this).hide(500);
        closeMenu.show(500);
        closeMenu.css('color', '#fff');
    });
    closeMenu.click(function () {
        $(this).hide(500);
        openMenu.show(500);
        closeMenu.css('color', '#1dbb36');
    });
});

// drop down menu in responsive mobile

//part 1
const dropDown1 = $('.d1');
const subMenu1 = $('.d1 ul')
const arrowDrop1 = $('.d1 i');
$(document).ready(function () {
    dropDown1.click(function () {
        if (menu.css('display') == 'block') {
            subMenu1.slideToggle();
            arrowDrop1.toggleClass(' open-menu');
        }
    });
});
//part 2
const dropDown2 = $('.d2');
const subMenu2 = $('.d2 ul')
const arrowDrop2 = $('.d2 i');
$(document).ready(function () {
    dropDown2.click(function () {
        if (menu.css('display') == 'block') {
            subMenu2.slideToggle();
            arrowDrop2.toggleClass(' open-menu');
        }
    });
});


/* -------------------------------------
# plugin aos animate
---------------------------------------*/

$(document).ready(function () {
    AOS.init({
        disable: 'mobile'
    });

    AOS.init({
        once: true,
        mirror: true,
        anchorPlacement: 'top-bottom'
    });
});

// owl carousel add icon
$(document).ready(function () {
    $('.owl-next span').empty();
    $('.owl-next span').append('<i class="fas fa-angle-right"></i>');
    $('.owl-prev span').empty();
    $('.owl-prev span').append('<i class="fas fa-angle-left"></i>');
});
// owl carousel add animate box content
$(document).ready(function () {
    $('.slideDown').css({
        "display": "block"

    });
    $()
})
/* -------------------------------------
# scroll to top 
---------------------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('.scroll').fadeIn();
    } else {
        $('.scroll').fadeOut();
    }
});
$(document).ready(function () {
    $('.scroll').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});

/* -------------------------------------
#  Portfolio 
---------------------------------------*/

$(document).ready(function () {
    $('.p-app,.p-web,.p-card').css({
        display: "block"
    });
    $('.f-all').click(function () {
        $('.p-app,.p-web,.p-card').css({
            display: "block"
        });
        $('.f-app,.f-web,.f-card').removeClass('active-portfolio');
        $('.f-all').addClass('active-portfolio');
    });
})

$(document).ready(function () {
    $('.f-app').click(function () {
        $('.p-app').css({
            display: "block"
        });
        $('.p-card,.p-web').css({
            display: "none"
        });
        $('.f-all,.f-web,.f-card').removeClass('active-portfolio');
        $('.f-app').addClass('active-portfolio');
    });
})

$(document).ready(function () {
    $('.f-card').click(function () {
        $('.p-card').css({
            display: "block"
        });
        $('.p-app,.p-web').css({
            display: "none"
        });
        $('.f-app,.f-web,.f-all').removeClass('active-portfolio');
        $('.f-card').addClass('active-portfolio');
    });
})

$(document).ready(function () {
    $('.f-web').click(function () {
        $('.p-web').css({
            display: "block"
        });
        $('.p-card,.p-app').css({
            display: "none"
        });
        $('.f-card,.f-app,.f-all').removeClass('active-portfolio');
        $('.f-web').addClass('active-portfolio');
    });
})
/* -------------------------------------
#  FAQ 
---------------------------------------*/
const btnOpenFaq1 = $('.f-faq1');
const contentFaq1 = $('.b-faq1');
$(document).ready(function(){
    btnOpenFaq1.click(function(){
        contentFaq1.slideToggle();
    });
});
const btnOpenFaq2 = $('.f-faq2');
const contentFaq2 = $('.b-faq2');
$(document).ready(function(){
    btnOpenFaq2.click(function(){
        contentFaq2.slideToggle();
    });
});
const btnOpenFaq3 = $('.f-faq3');
const contentFaq3 = $('.b-faq3');
$(document).ready(function(){
    btnOpenFaq3.click(function(){
        contentFaq3.slideToggle();
    });
});