$("nav ul li a").click(function(event) {
    event.preventDefault();

    const sectionToScroll = $(this).attr("href");

    if(sectionToScroll === "#intro-section"){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

        return;
    }

    $('html, body').animate({
        scrollTop: $(sectionToScroll).offset().top - ($("nav").height())
    }, 2000);
});