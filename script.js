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
        var hourArray = [];
        for (var j = 8; j > -1; j--) {
            hourArray.push(j);
        }

        var m = 0;
        var h = 0;
        setInterval(function() {
            if (m < minuteArray.length) {
                $('span.minute').text(minuteArray[m]);
                m++;
            } else {
                m = 0;
                if (h < hourArray.length) {
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
                // totCupcakes = totalCupcakes(n);
                var totsCupcakes = totalCupcakes(n);
                // var $newbatch = $('<div class="cupcake' + totCupcakes + '""></div>');
                // $container.append($newbatch);
                updateCash(0, 12);
                return totsCupcakes;
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
        if ($cupcakesLeft < 0) {
            $cupcakesLeft = 0
        };
        $('span.numOfCC').text($cupcakesLeft);
        var $updatedCC = $('<div class="cupcake' + $cupcakesLeft + '""></div>');
        $container.append($updatedCC);
        return $cupcakesLeft;
    }
    var randomCustomer = function() {
        var randomIndex = Math.ceil(Math.random() * 3);
        return randomIndex;
    };
    var customerArray = [];
    var customerQ = [];
    var priceSens = [];
    var custDemands = []
    var priceSensitivity = function() {
        //there are three groups of price sensitivity ($3, $5, $10)
        //but the distribution of these groups vary by (70%, 20%, 10%)
        //so, creating an array that reflects this:
        var group1 = 3;
        var group2 = 5;
        var group3 = 10;
        var group1prob = 70;
        var group2prob = 20;
        var group3prob = 10;
        var probArray = [];
        for (var i = 0; i < group1prob; i++) {
            probArray.push(group1);
        }
        for (var j = 0; j < group2prob; j++) {
            probArray.push(group2);
        }
        for (var k = 0; k < group3prob; k++) {
            probArray.push(group3);
        }
        //this array will go into the customerArray as the third element
        for (var i = 0; i < customerQ.length; i++) {
            var indexP = Math.floor(Math.random() * (group1prob + group2prob + group3prob));
            priceSens.push(probArray[indexP]);
            console.log('indexP ' + indexP);
            console.log('probArray ' + probArray);
            console.log('priceSens ' + priceSens);
        }
    };
    var assignCharToCust = function() {
        for (var i = 0; i < customerQ.length; i++) {
            var demand = Math.ceil(Math.random() * 6);
            custDemands.push(demand);
        };
        console.log('demands array ' + custDemands);
        customerArray[1] = custDemands;
        customerArray[2] = priceSens;
        //second item within customerArray is an array of customer demands
    };


    var customerCreation = function() {
        var n = randomCustomer();
        var $createCustomer = $('<li class="customer' + n + '""></li>');
        $createCustomer.addClass('buyer');
        var $customerList = $('ul.customer')
        $customerList.append($createCustomer);
        customerQ.push($createCustomer);
        assignCharToCust();
        priceSensitivity();
        customerArray[0] = customerQ;
        //first item within customerArray is the customerQ array with the DOM elements

    };

    var randomizedCustomerCreation = function() {
        if (customerQ.length < 3) {
            var binary = Math.round(Math.random());
            if (binary === 1) {
                customerCreation();
            }
        }

    }




    var ringUpSale = function() {
        //check how many cupcakes the customer wants
        var customerElement = customerArray[0][0];
        var customerDemand = customerArray[1][0];
        var customerPriceSensitivity = customerArray[2][0];
        console.log('customer element' + customerElement);
        console.log('demand ' + customerDemand);
        console.log('price sensitivity ' + customerPriceSensitivity);
        var $cupcakeLeft = parseInt($('.numOfCC').text());
        console.log('cupcake left ' + $cupcakeLeft);
        var customersOnQueue = customerArray[0];
        console.log('customers ' + customersOnQueue);
        var demandsInOrder = customerArray[1];
        console.log('demands ' + demandsInOrder);
        if (customerDemand < $cupcakeLeft) {
            updateCash(customerDemand * 3, 0);
            totalCupcakes(-demandsInOrder);
            //figure out why the cupcakes never reach 0 using this function


            // var customerServed = customerArray[0][0].shift();
            // var servedCustomerDemand = customerArray[1][0].shift();
            // var servedCustPriceSens = customerArray[2][0].shift();
        }
        // console.log('shifted customer '+customerArray);

    }

    $('.ringUp').on('click', function() {
        ringUpSale();
        randomizedCustomerCreation();
        //maybe this function should be connected to an advertisement campaign that costs money
    })





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
