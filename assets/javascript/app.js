$(".resume").click(function () {
    $(".main").fadeOut(500);
    $(".hidden").fadeIn(1500);
})

$(".go-back").click(function () {
    $(".hidden").fadeOut(500);
    $(".main").fadeTo('slow', 1);
})

$(".projects").click(function () {
    $(".main").fadeOut(500);
    $(".hidden-2").fadeIn(1500);
})

$(".go-back-2").click(function () {
    $(".hidden-2").fadeOut(500);
    $(".main").fadeTo('slow', 1);
})

// Toggle darkmode functionality
var dark = false;
$(".slider").click(function () {
    if (dark === false) {
        $('body').css("background", "#433E3E");
        $('.name').css("color", "#3CB371");
        $('.link').css("color", "#fff");
        $('.link').css("background-color", "#006400");
        $('.link').hover( function() {
            $(this).css("background-color", "#3CB371");
        }, function () {
            $(this).css("background-color", "#006400");
        });
        $('.sub-wrapper').css("background", "#006400");
        $('.sub-wrapper').css("border-bottom", "15px solid #3CB371");  
        $(".resume-content").css("color", "#F0FFF0"); 
        $(".projects-content").css("color", "#F0FFF0");      
        dark = true;
    } else if (dark === true) {
        $('body').css("background", "#fff");
        $('.name').css("color", "#000");
        $('.link').css("color", "#000");
        $('.link').css("background-color", "#3CB371");
        $('.link').hover(function () {
            $(this).css("background-color", "#006400");
        }, function () {
            $(this).css("background-color", "#3CB371");
        });
        $('.sub-wrapper').css("background", "#3CB371");
        $('.sub-wrapper').css("border-bottom", "15px solid #006400");
        $(".resume-content").css("color", "#000");
        $(".projects-content").css("color", "#000");        
        dark = false;
    }
})