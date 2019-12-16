$(document).ready(function () {

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });


    setTimeout(() => {
        AOS.init();
    }, 3100);


    $("nav li a").hover(function () {


        $("nav li a").each(function () {
            $(this).stop().animate({
                color: randomHexColor(),
            }, 1000);
        });

    }, function () {
        $("nav li a").stop().animate({
            "color": "#FFFFFF"
        }, 1000);
    });

    $(".section-header").hover(function () {

        const navElementId = $(this).parent().attr('id').split("-")[0] + "-nav-link";


        $(`#${navElementId}, .section-header`).stop().animate({
            color: randomHexColor(),
        }, 1000);


    }, function () {

        const navElementId = $(this).parent().attr('id').split("-")[0] + "-nav-link";

        $(`#${navElementId}, .section-header`).stop().animate({
            color: "#FFFFFF",
        }, 1000);
    });


    animateNavLine();

    $(window).resize(function () {
        animateNavLine();
    });

    languageCertificatesViewer();


});


function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function showSkillBar(){

    $("#english-skillbar").animate({
        width: $('#english-skillbar').parent().attr('data-percent')
    }, 3000);

    $("#german-skillbar").animate({
        width: $('#german-skillbar').parent().attr('data-percent')
    }, 3000);
}


function animateNavLine() {
    const introOffset = $('#intro-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const educationOffset = $('#education-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const skillsOffset = $('#skills-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const languagesOffset = $('#languages-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const portfolioOffset = $('#portfolio-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const certificatesOffset = $('#certificates-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());
        const achievementsOffset = $('#achievements-section').offset().top - ($("nav").height() + 2 * $(".section-header").height());

        $(document).scroll(function () {
            const scrollPos = $(document).scrollTop();
            if (scrollPos >= introOffset && scrollPos < educationOffset) {
                $("hr").removeClass("active");
                $('#about-line').addClass("active");
            } else if (scrollPos >= educationOffset && scrollPos < skillsOffset) {
                $("hr").removeClass("active");
                $('#education-line').addClass("active");
            } else if (scrollPos >= skillsOffset && scrollPos < languagesOffset) {
                $("hr").removeClass("active");
                $('#skills-line').addClass("active");
            } else if (scrollPos >= languagesOffset && scrollPos < portfolioOffset) {
                $("hr").removeClass("active");
                $('#languages-line').addClass("active");
                showSkillBar();
            } else if (scrollPos >= portfolioOffset && scrollPos < certificatesOffset) {
                $("hr").removeClass("active");
                $('#portfolio-line').addClass("active");
            } else if (scrollPos >= certificatesOffset && scrollPos < achievementsOffset) {
                $("hr").removeClass("active");
                $('#certificates-line').addClass("active");
            } else if (scrollPos >= achievementsOffset) {
                $("hr").removeClass("active");
                $('#achievements-line').addClass("active");
            }
        });
}

function languageCertificatesViewer() {


    $(".lang-cert").viewer({
        backdrop: true,
        button: true, 
        fullscreen: true,
        movable: true, 
        zoomable: true,
        navbar: false,
        title: false,
        toolbar: false,
      });
}