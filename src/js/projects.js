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



});


