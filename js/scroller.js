$("nav ul li a").click(function(event) {
    event.preventDefault();

    const sectionToScroll = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(sectionToScroll).offset().top - ($("nav").height())
    }, 2000);
});