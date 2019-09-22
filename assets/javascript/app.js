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

// Note