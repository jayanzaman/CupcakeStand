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
        alert("Not enouch space in the cupcake display case.")
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
  var customerCreation = function(n){

    var creatCustomer = $('<div class="customer'+n+'""></div>');
    $container.append(creatCustomer);


  }
  // customerCreation(1);
  var startTime = function(){
    var timeDisplay = $('<div class="time">Time: <span class="hour">8</span> Hours <span class="minute">0</span> minutes left</div>');
    $container.append(timeDisplay);

    var minuteArray = [];
    for(var i = 0; i<60; i++){
      minuteArray.push(i);
    }
    minuteArray.reverse();
    console.log(minuteArray);
    var hourArray = [];
    for(var j=8; j> -1; j--){
      hourArray.push(j);
    }
    console.log(hourArray);
    // console.log(hourArray[0]);

      //   var h = 0;
      // setInterval(function(){
      //   if(h <hourArray.length){
      //       console.log(hourArray[h]);
      //       $('span.hour').text(hourArray[h]);
      //       h++;
      //   }
      // }, 60000);
        var m = 0;
        var h = 0;
      setInterval(function(){
        if(m <minuteArray.length){
            console.log(minuteArray[m]);
            $('span.minute').text(minuteArray[m]);
            m++;
        }else{
          m = 0;
          // setInterval(function(){
            if(h < hourArray.length){
              console.log(hourArray[h]);
              $('span.hour').text(hourArray[h]);
              h++;
            }else{
              alert("Game finished");
              m = minuteArray.length;
            }
          // }, 60000);
        }
      }, 100);



  }
  startTime();

    // var startTheGame = function(){
      $('div.click_btn').on('click', function(){
        bakeCupcake(6);
      })
    // }
    // startTheGame();


    //Clicking the "bake new batch initializes when page loads"
    // $('div.click_btn').on('click', function(){
    //     bakeCupcake(6);
    // })







});
