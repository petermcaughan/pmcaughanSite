/**
 * Created by peter_000 on 6/27/2017.
 */


$(document).ready(function() {

    //Display text over album art when cursor hovers over, remove on hover off
    $(".art-container").hover(function () {
        console.log("Show");
        var text = $(this).data('text');
        //Going to have 5 possible colors
        var hash = Math.abs((text.hashCode())) % 5;
        console.log("hash is : " + hash);
        switch(hash){
            case 0:
                color = '#f44336';
                break;
            case 1:
                color = '#ffeb3b';
                break;
            case 2:
                color = '#4caf50';
                break;
            case 3:
                color = '#2196f3';
                break;
            case 4:
                color = '#9c27b0';
                break;
            default:
                color = '#000000';
        }
        $('#' + text).css('background-color', color);
        $('#' + text).stop().slideToggle();
    });


});

/*Taken from http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
Going to try and diversify dropdown color without anything needed by me.*/
 String.prototype.hashCode = function(){
 var hash = 0;
 if (this.length == 0) return hash;
 for (i = 0; i < this.length; i++) {
 char = this.charCodeAt(i);
 hash = ((hash<<5)-hash)+char;
 hash = hash & hash; // Convert to 32bit integer
 }
 return hash;
 }

