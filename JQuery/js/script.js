//script.js

//EVENTS JQUERY METHODS
$(function() {
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    $('#box').click(function() {
        alert('you just clicked the thing');
    });
        
    $("input").blur(function() {
        if( $(this).val() == "" ) {
            $(this).css('border', 'solid 1px red');
            $('#box').text('Forgot to add text?');
        }
    });  
    
    $('input').keydown(function(){
        if( $(this).val() !=="") {
            $(this).css('border','solid 1px green');
            $('#box').text('Thanks for that!');
        }
    });
    
    $('#box').hover(function(){
        $(this).text('you hovered in!');
        
    }, function() {
        $(this).text('you hovered out!');
    }); 
    
    //Car Racer 2.0
    
    //click the go buttom:
    $('#go').click(function(){
        
        //get the width of the cars:
        var carWidth = $('#car1').width();
        
        //get the width of the racetrack
        var raceTrackWidth = $(window).width() -carWidth;
        
        //generate a random # between 1 and 5000: this formula will set up the race between the cars once the computer will pick random numbers for each and multiple by 5000 which is time
        
        var raceTime1 = Math.floor( (Math.random() * 5000) +1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) +1 );
        
        //set a flag variable to FALSE by default
        var isComplete = false;
        
        //set a flag variable to FIRST by default
        var place = 'first';
        
        //animate car 1
        $('#car1').animate({
            
            //move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function(){
            
            //                   
        });
        
    });
    
    // JQUERY CHAINING
    // Chaining is about to do a group of commands for the same element;
    
    $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
    
    //Jquery hide/show
    
    //$('h1').hide();
    //$('div.hidden').show();
    //$('div.hidden').fadeIn(8000);
    
    $('#box1').click(function(){
        $(this).fadeTo( 1000, 0.25, function() {
        $(this).slideUp();
        });
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function(){
        $('#box1').slideToggle();
    });
    
    //Jquery Animate
    // Basic Sintax of Animate bellow:
    
    $('#left').click(function(){
        $('.box').animate({
            left: "-=40px",
            fontSize:"+=2px"
    }, function() {
        });
    });
    
    $('#up').click(function(){
        $('.box').animate({
            top: "-=40px",
            opacity:"+=0.1"
    }, function() {
        });
    });

    $('#right').click(function(){
        $('.box').animate({
            left: "+=40px",
            fontSize:"-=2px"
    }, function() {
        });
    });
    
    $('#down').click(function(){
        $('.box').animate({
            top: "+=40px",
            opacity:"-=0.1"
    }, function() {
        });
    });
    
    //Jquery CSS
    
    // JQuery - CSS basic syntax: you can do multiple times changing the values but is not th ebest practice this case the best practice is chaining.
    
    //$('#circle2'=div).css('background'=property, '#8a8d22'=value)
    ///$('#circle2').css('background', '#8a8d22')
    
    //chaining method bellow:
    
    $('#circle2').css({
    'display':'inline-block',
    'background':'#8a8d22',
    'color':'white',
    'text-align':'center',
    'line-height':'140px',
    'height':'140px',
    'width':'140px',
    'margin':'40px',
    }).addClass('circleShape');
    
});

// GROUPING SELECTORS
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



 