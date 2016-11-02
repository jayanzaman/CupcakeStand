$(function(){
  "use strict";

  var $container = $('div.container');
  var cashOnHand;

  var bakeCupcake = function(n){
    //this function will create the object cupcake and place them on the screen
    //everytime a new back of cupcakes are created, it'll cost the owner
    //this function will trigger on a click on the screen

    //creating a new
    var $cupcakesLeft = parseInt($('span.numOfCC').text());
    console.log($cupcakesLeft);
    var newbatch = $('<div class="cupcake'+n+'""></div>');
    $container.append(newbatch);
    var $cashLeft = parseInt($('span.cashAmount').text());

    $cashLeft = $cashLeft - (6*2);
        console.log($cashLeft);
    $('span.cashAmount').text($cashLeft);
    return newbatch;
  }

    //Clicking the "bake new batch initializes when page loads"
    $('div.click_btn').on('click', function(){
        bakeCupcake(6);
    })







});
