/**
 * Created by peter_000 on 7/13/2017.
 */


$(function() {

        var imgWidth = document.getElementById("representative").clientWidth;
        $('.img-container').css("height", imgWidth);


    $(window).on('resize',function(){
        var imgWidth = document.getElementById("representative").clientWidth;
        $('.img-container').css("height", imgWidth);
    });

    $(".download-button").mouseover(function () {
    	console.log("on");
        $(this).stop().animate({
            backgroundColor: "white",
            color:"black"
        }, 100);
    });


    $(".download-button").mouseout(function () {
    	console.log("off");
        $(this).stop().animate({
            backgroundColor: "black",
            color:"white"
        }, {
            queue: true,
            duration: 100,
        });

    });


});


