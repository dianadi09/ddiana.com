//constants
$(function() {
    onPageLoadSetups();
});

function onPageLoadSetups() {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 80) {
                $('.header').fadeIn(100).removeClass('hidden');
            } else {
                $('.header').addClass('hidden');
            }
        });
    });
}