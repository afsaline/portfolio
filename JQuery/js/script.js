//script.js


$(function() {
    $("button").click(function(){
        $('#box').fadeOut(1000);
    });
    
//Grouping selector
//$('h1,h3,h4').css('border', 'solid 1px red');

//Id selector
//$('div#container').css('border','solid 1px red');

//Class selector
//$('p.lead').css('border','solid 1px red');

//Pseudo-element selector: selects "first" element
//$('li:first').css('border','solid 1px red');

//Pseudo-element selector: selects "even P" tags
//$('p:even').css('border','solid 1px red');

//Descendent selector: em tag inside the div
//$('div > p').css('border','solid 1px red');

//Child selector: p tag as a child of div
//$('div em').css('border','solid 1px red');

//JQuery header selector
//$(':header').css('border','solid 1px red');

//JQuery contains selector
//$('div:contains("Brad")').css('border','solid 1px red');


    $('#box').click(function() {
        alert('you just clicked the box');
    
});