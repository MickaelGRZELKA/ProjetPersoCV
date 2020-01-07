$(document).ready(function () {
    $('body').css('display', 'none');
    $('body').fadeIn(1500);

    $('.buttonLink').click(function (event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1500, newpage);

    });

    function newpage() {
        window.location = newLocation;
    }
});