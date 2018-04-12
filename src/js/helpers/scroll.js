$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#header');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("#navbar").css('background-color', 'white');
                $('.navbar-item').css('color', 'black');
            } else {
                $('#navbar').css('background-color', 'transparent');
                $('.navbar-item').css('color', 'white');
            }
        });
    }
});