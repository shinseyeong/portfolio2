$(document).ready(function(){
    $(".burger").click(function(){
        $("nav").slideToggle();
    });
    $(window).resize(function(){
        if(window.innerWidth>=991){
            $("nav").show();
        }
    });
    $(window).resize(function(){
        if(window.innerWidth<=990){
            $("nav").hide();
        }
    });
});

