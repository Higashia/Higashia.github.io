$('.landing-page').click(function() {
    $('.home-card').css('opacity', '1');
    $('.main-navigation').css('opacity', '1');
});

$(document).ready(function() {
    setTimeout(function() {
        $('.home-card').css('opacity', '1');
        $('.main-navigation').css('opacity', '1');
    }, 7000);
});