$(function(){
  "use strict";

  var $container = $('div.container');
  var cashOnHand;

  var bakeCupcake = function(n){
    //this function will create the object cupcake and place them on the screen
    //everytime a new back of cupcakes are created, it'll cost the owner
    //this function will trigger on a click on the screen
    var totCupcakes = totalCupcakes(0);
    if((totCupcakes+n) <= 12){
        setTimeout(function(){
          totCupcakes = totalCupcakes(n);
          var newbatch = $('<div class="cupcake'+totCupcakes+'""></div>');
          $container.append(newbatch);
          updateCash(0, 12);
          return newbatch;
        }, 2000);
    } else{
        alert("No more space in the cupcake display case.")
        var newbatch = $('<div class="cupcake'+totCupcakes+'""></div>');
          $container.append(newbatch);
        return totCupcakes;
    }







  }

  var updateCash = function(add, minus){
    //this functions adds or substracts the amount cash
    var $cashLeft = parseInt($('span.cashAmount').text());
    $cashLeft = $cashLeft + add;
    $cashLeft = $cashLeft - minus
    $('span.cashAmount').text($cashLeft);
    return $cashLeft;
  }
  var totalCupcakes = function(n){
    var $cupcakesLeft = parseInt($('span.numOfCC').text());
    $cupcakesLeft = $cupcakesLeft + n;

    $('span.numOfCC').text($cupcakesLeft);
    return $cupcakesLeft;
  }






    //Clicking the "bake new batch initializes when page loads"
    $('div.click_btn').on('click', function(){
        bakeCupcake(6);
    })







});
