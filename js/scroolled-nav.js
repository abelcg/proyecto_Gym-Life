$(window).on("scroll", function(){
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});  
