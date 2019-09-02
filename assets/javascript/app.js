$(".resume").click(function () {
    $(".main").fadeOut(500);
    $(".hidden").fadeIn(1500);
})

$(".go-back").click(function () {
    $(".hidden").fadeOut(500);
    $(".main").fadeTo('slow', 1);
})