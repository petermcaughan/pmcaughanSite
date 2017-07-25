/**
 * Created by peter_000 on 6/26/2017.
 */


$(document).ready(function() {


    var imgWidth = document.getElementById("representative").clientWidth;
    $('.main-button').css("height", imgWidth);


    $(window).on('resize',function(){
        var imgWidth = document.getElementById("representative").clientWidth;
        $('.main-button').css("height", imgWidth);
    });

    //On hovering over a button, color the screen and display the expository text.
        $(".main-button").hover(function () {
            var color = this.style.backgroundColor;
            var text = $(this).data('text');
            $("#circle").stop().animate({
                backgroundColor: color
            }, 500);
            console.log("Here");
            $('#' + text ).stop().show(500);

        });


        $(".main-button").mouseout(function () {

            $("#circle").stop().animate({
                backgroundColor: '#ffffff'
            }, {
                queue: true,
                duration: 300,
            });

            var text = $(this).data('text');

            $('#' + text).stop().hide(500);

        });

});