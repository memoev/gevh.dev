$(".resume").click(function () {
    $(".wrapper").animate({
        opacity: 0.25,
        // left: "+=50",
        height: "toggle"
    }, 500, function () {
        $('.main').css("display", "none");
        $(".hidden").fadeIn(750);
    });
});

$(".go-back").click(function () {
    $(".hidden").fadeOut(300);
    $('.main').slideDown(500);
    $(".wrapper").animate({
        opacity: 1,
        // left: "+=50",
        height: "toggle"
    }, 1000, function () {
    });
});

$(".projects").click(function () {
    $(".wrapper").animate({
        opacity: 0.25,
        // left: "+=50",
        height: "toggle"
    }, 500, function () {
        $('.main').css("display", "none");
        $(".hidden-2").fadeIn(750);
    });
});

$(".go-back-2").click(function () {
    $(".hidden-2").fadeOut(300);
    $('.main').slideDown(500);
    $(".wrapper").animate({
        opacity: 1,
        // left: "+=50",
        height: "toggle"
    }, 1000, function () {
    });
});

// Toggle darkmode functionality
var dark = false;
$(".slider").click(function () {
    if (dark === false) {
        // alert("hi!");
        $('.sub-wrapper').css({ 'background-image': 'url(../gevh.dev/assets/images/back.jpg)' });
    //     $('.name').css("color", "#3CB371");
    //     $('.link').css("color", "#fff");
        $('body').css("background-color", "#2B2B2B");
    //     $('.link').hover( function() {
    //         $(this).css("background-color", "#3CB371");
    //     }, function () {
    //         $(this).css("background-color", "#006400");
    //     });
        $('.image-wrapper').css("background", "#1D1D1D"); 
    //     $('.sub-wrapper').css("border-bottom", "15px solid #3CB371");  
         $(".resume-content").css("color", "#696969"); 
         $(".projects-content").css("color", "#696969");
        $(".title").css("color", "#fff")      
        dark = true;
    } else if (dark === true) {
        $('.sub-wrapper').css({ 'background-image': 'url(../gevh.dev/assets/images/ground.jpg)' });
        $('body').css("background-color", "#fff");
        $('.image-wrapper').css("background", "#F5F5F5"); 
    //     $('body').css("background", "#fff");
    //     $('.name').css("color", "#000");
    //     $('.link').css("color", "#000");
    //     $('.link').css("background-color", "#3CB371");
    //     $('.link').hover(function () {
    //         $(this).css("background-color", "#006400");
    //     }, function () {
    //         $(this).css("background-color", "#3CB371");
    //     });
    //     $('.sub-wrapper').css("background", "#3CB371");
    //     $('.sub-wrapper').css("border-bottom", "15px solid #006400");
    //     $(".resume-content").css("color", "#000");
    //     $(".projects-content").css("color", "#000"); 
         $(".title").css("color", "#000")      
        dark = false;
    };
})