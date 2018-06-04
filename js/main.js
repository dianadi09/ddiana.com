//constants
$(function() {
    onPageLoadSetups();
});


function onPageLoadSetups() {
    $(document).ready(function() {
        $('div.introText').fadeIn(1000).removeClass('hidden');

        $('.scroll-to, #navigation a').click(function(event) {
            event.preventDefault();
            var full_url = this.href;
            var parts = full_url.split("#");
            var trgt = parts[1];

            $('html, body').animate({
                scrollTop: $('#' + trgt).offset().top
            }, 1000);
            $(".navbar-toggle").trigger("click");
        });

        var galleryImage = new pureJSLightBox();
    });
}