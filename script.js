window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
$(document).ready(function () {
    $('#so-close').click(function () {
        $('.s-soft').addClass('so-collapse');
        $('#so-open').delay(300).css('left', '0');
    });

    $('#so-open').click(function () {
        $('#so-open').css('left', '-60px');
        $('.s-soft').removeClass('so-collapse');
    });
}); 