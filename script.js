$(function() {
    "use strict";

    var $container = $('div.container');
    var cashOnHand;
    var startTime = function() {
        var $timeDisplay = $('<div class="time">Time: <span class="hour">8</span> Hours <span class="minute">0</span> minutes left</div>');
        $container.append($timeDisplay);

        var minuteArray = [];
        for (var i = 0; i < 60; i++) {
            minuteArray.push(i);
        }
        minuteArray.reverse();
        console.log(minuteArray);
        var hourArray = [];
        for (var j = 8; j > -1; j--) {
            hourArray.push(j);
        }
        console.log(hourArray);

        var m = 0;
        var h = 0;
        setInterval(function() {
            if (m < minuteArray.length) {
                console.log(minuteArray[m]);
                $('span.minute').text(minuteArray[m]);
                m++;
            } else {
                m = 0;
                if (h < hourArray.length) {
                    console.log(hourArray[h]);
                    $('span.hour').text(hourArray[h]);
                    h++;
                } else {
                    alert("Game finished");
                    m = minuteArray.length;
                }
            }
        }, 100);
    }
    startTime();
    var bakeCupcake = function(n) {
        //this function will create the object cupcake and place them on the screen
        //everytime a new back of cupcakes are created, it'll cost the owner
        //this function will trigger on a click on the screen
        var totCupcakes = totalCupcakes(0);

        if ((totCupcakes + n) <= 12) {
            setTimeout(function() {
                totCupcakes = totalCupcakes(n);
                var $newbatch = $('<div class="cupcake' + totCupcakes + '""></div>');
                $container.append($newbatch);
                updateCash(0, 12);
                return $newbatch;
            }, 2000);
        } else {
            alert("Not enouch space in the cupcake display case.")
            var $newbatch = $('<div class="cupcake' + totCupcakes + '""></div>');
            $container.append($newbatch);
            return totCupcakes;
        }
    }
    var updateCash = function(add, minus) {
        //this functions adds or substracts the amount cash
        var $cashLeft = parseInt($('span.cashAmount').text());
        $cashLeft = $cashLeft + add;
        $cashLeft = $cashLeft - minus
        $('span.cashAmount').text($cashLeft);
        return $cashLeft;
    }
    var totalCupcakes = function(n) {
        var $cupcakesLeft = parseInt($('span.numOfCC').text());
        $cupcakesLeft = $cupcakesLeft + n;

        $('span.numOfCC').text($cupcakesLeft);
        return $cupcakesLeft;
    }
    var randomCustomer = function() {
        var randomIndex = Math.ceil(Math.random() * 3);
        return randomIndex;
    };
    var customerCreation = function() {
        var n = randomCustomer();
        var $createCustomer = $('<li class="customer' + n + '""></li>');
        $createCustomer.addClass('buyer');
        var $customerList = $('ul.customer')
        $customerList.append($createCustomer);

    };
    customerCreation();
    var customerQ = [];
    var customerQueue = function(){
      //sets up order of customers
      var $firstCustomer = $('li.customer:nth-child(1)');
      $firstCustomer.attr('id', 'firstCust');
      var $secondCustomer = $('li.customer:nth-child(2)');
      $secondCustomer.attr('id', 'secondCust');
      var $thirdCustomer = $('li.customer:nth-child(3)');
      $thirdCustomer.attr('id', 'thirdCust');
      customerQ.push($firstCustomer);
      customerQ.push($secondCustomer);
      customerQ.push($thirdCustomer);
    }
    var ringUpSale = function(){
      //check how many cupcakes the customer wants
    }





    // var startTheGame = function(){
    $('div.click_btn').on('click', function() {
            bakeCupcake(6);
        })
        // }
        // startTheGame();


    //Clicking the "bake new batch initializes when page loads"
    // $('div.click_btn').on('click', function(){
    //     bakeCupcake(6);
    // })







});
