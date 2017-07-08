/**
 * Created by peter_000 on 6/26/2017.
 */


$(document).ready(function() {

    //On hovering over a button, color the screen and display the expository text.
        $(".main-button").hover(function () {
            var color = this.style.backgroundColor;
            var text = $(this).data('text');
            $("html body").stop().animate({
                backgroundColor: color
            }, 500);
            console.log("Here");
            $('#' + text ).stop().show(500);

        });


        $(".main-button").mouseout(function () {

            $("html body").stop().animate({
                backgroundColor: '#ffffff'
            }, {
                queue: true,
                duration: 300,
            });

            $('.detail-text').stop().hide(500);

        });

});