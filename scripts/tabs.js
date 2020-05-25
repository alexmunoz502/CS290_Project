// Referenced this youtube video:
// https://www.youtube.com/watch?v=5CjFJ6F8BIQ
$(".nav-tabs li a").on("click", function(){
    $(".nav-tabs li a").removeClass("active");
    $(this).addClass("active");
});
