var total = 0,
    totalImagesAmount,
    stripe,
    windowHeight,
    windowWidth,
    percentValueContainer;

function sticky() {
    $(".header").sticky();
}

function setImageEffects() {
    $('.zoomedImageFrame').hover(function() {
        var galleryImage = $(this).find("img.previewImg")[0];
        $(this).addClass('imageZoom');

    }, function() {
        var galleryImage = $(this).find("img.previewImg")[0];
        $(this).removeClass('imageZoom');
    });
}

function setMobileArrow(windowHeight) {
    var height = windowHeight - 40;
    var arrow = $("#mobileArrow");
    if (!arrow) {
        return;
    }
    arrow.css('top', height + "px");

    if ($(window).width() < 768) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                arrow.addClass("hidden");
            } else {
                arrow.removeClass("hidden");
            }
        });
    }
}

$.fn.alignElementsSameHeight = function() {
    $('.same-height-row').each(function() {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function() {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function() {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}

function showContent() {
    $('.fancyLoader').fadeOut(1000).addClass("hidden");
}

function initLoader(imgArray, callback) {
    if (!imgArray || imgArray.length === 0) {
        return false;
    }
    loadContent(imgArray, callback);
}

function loadContent(imgArray, callback) {
    var imageCount = imgArray.length;
    var loadedCount = 0,
        errorCount = 0;

    var checkAllLoaded = function() {
        if (loadedCount + errorCount == imageCount && typeof callback === "function") {
            isContentLoaded = true;
            callback();
        }
    };

    var onload = function() {
            loadedCount++;
            checkAllLoaded();
        },
        onerror = function() {
            errorCount++;
            checkAllLoaded();
        };

    for (var i = 0; i < imageCount; i++) {
        var img = new Image();
        img.onload = onload;
        img.onerror = onerror;
        img.src = imgArray[i].src;
    }
}

$(window).load(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    initLoader($("body img"), showContent);
    $(this).alignElementsSameHeight();
    sticky();
    setMobileArrow(windowHeight);
    setImageEffects();
});

$(window).resize(function() {

    newWindowWidth = $(window).width();
    newWindowHeight = $(window).height();

    if (windowWidth && windowWidth !== newWindowWidth) {
        setTimeout(function() {
            $(this).alignElementsSameHeight();
        }, 100);
        windowWidth = newWindowWidth;
        windowHeight = newWindowHeight;
        setMobileArrow(windowHeight);
    }
});