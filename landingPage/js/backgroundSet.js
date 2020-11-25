$(document).ready(function () {
    $("header").hide()
    $("header").fadeIn(1500)
    if (window.innerWidth > 651) { $(".header-right").show(); $(".header-right1").hide() } 
    
    $(".portfolio").fadeIn(1500)
    setTimeout(function () { $("footer").fadeIn(1500); $(".grayColBackground").fadeIn(1500) }, 500)

    for (let i = 2; i < 5; i++) {
        $(`body > section.twoCol > div.leftCol > div:nth-child(${i})`).slideToggle(750)
        $(`body > section.twoCol > div.rightCol > div:nth-child(${i})`).slideToggle(750)
    }

    $(".grayColBackground").css({ "height": $(".row").outerHeight() + $(".twoCol").outerHeight() + $(".portfolio").outerHeight() + $("#footer").outerHeight() + 50 + "px" })

    $(window).on('resize', function () { $(".grayColBackground").css({ "height": $(".row").outerHeight() + $(".twoCol").outerHeight() + $(".portfolio").outerHeight() + $("#footer").outerHeight() + 50 + "px" }) })

    $("#collapse").on('click', function () { $(".header-right1").slideToggle(500) })
    $(window).on('resize', function () { if (window.innerWidth > 651) { $(".header-right").show(); $(".header-right1").hide() } })

});