/**
 * Created by peter_000 on 8/9/2017.
 */


$(document).ready(function() {

    $(".game").mouseover(function () {
        console.log("here");
        $(this).stop().animate({
            backgroundColor: "black",
            color: "white"
        }, 100);
    });


    $(".game").mouseout(function () {
        var color = $(this).data('color');
        $(this).stop().animate({
            backgroundColor: color,
            color: "black"
        }, {
            queue: true,
            duration: 100,
        });

    });





});