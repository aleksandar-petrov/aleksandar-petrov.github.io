$(document).ready(function () {

    $("#english-img").hover(function () {
        $("#english-skillbar").animate({
            width: $('#english-skillbar').parent().attr('data-percent')
        }, 2000);
    }, function () {
        $("#english-skillbar").animate({
            width: 0
        }, 2000);
    });

    $("#german-img").hover(function () {
        $("#german-skillbar").animate({
            width: $('#german-skillbar').parent().attr('data-percent')
        }, 2000);
    }, function () {
        $("#german-skillbar").animate({
            width: 0
        }, 2000);
    });

    

});
