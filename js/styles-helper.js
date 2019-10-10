$(document).ready(function () {

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



    const introOffset = $('#intro-section').offset().top - 4 * ($("nav").height());
    const educationOffset = $('#education-section').offset().top - 4 * ($("nav").height());
    const skillsOffset = $('#skills-section').offset().top - 4 * ($("nav").height());
    const languagesOffset = $('#languages-section').offset().top - 4 * ($("nav").height());
    const portfolioOffset = $('#portfolio-section').offset().top - 4 * ($("nav").height());
    const certificatesOffset = $('#certificates-section').offset().top - 4 * ($("nav").height());
    const achievmentsOffset = $('#achievments-section').offset().top - 4 * ($("nav").height());

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
        } else if (scrollPos >= portfolioOffset && scrollPos < certificatesOffset) {
            $("hr").removeClass("active");
            $('#portfolio-line').addClass("active");
        } else if (scrollPos >= certificatesOffset && scrollPos < achievmentsOffset) {
            $("hr").removeClass("active");
            $('#certificates-line').addClass("active");
        } else if (scrollPos >= achievmentsOffset) {
            $("hr").removeClass("active");
            $('#achievments-line').addClass("active");
        }
    });
});


function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}