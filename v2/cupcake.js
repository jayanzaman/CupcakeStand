$(function() {
    "use strict";

    var $otherContainer = $('div.otherContainer');
    var $customerContainer = $('div.customerContainer');
    var $cupcakeContainer = $('.cupcakeContainer');
    var cashOnHand;
    var price = parseInt($('span.ccPrice').text());

    var priceSet = function() {
        var newPrice = prompt("How much would you like to charge for one cupcake?")
        console.log(newPrice);
        var $newPrice = $('span.ccPrice');
        $newPrice.text(newPrice);

    }
    var stopTheGame = function() {
        clearInterval(randomizedCustomerCreation);
        // $('div.customerContainer').remove();
        $('ul.customerGroup').remove();
        $('div.custDemand1').remove();
        $('.cupcake1').remove();
        $('.cupcake2').remove();
        $('.cupcake3').remove();
        $('.cupcake4').remove();
        $('.cupcake5').remove();
        $('.cupcake6').remove();
        $('.cupcake7').remove();
        $('.cupcake8').remove();
        $('.cupcake9').remove();
        $('.cupcake10').remove();
        $('.cupcake0').remove();
        $('.displayCupcake').remove();

    }
    var restart = function() {

    }
    var startTime = function() {
        var $timeDisplay = $('<button role="button" class="btn btn-default time">Time: <span class="hour">1</span> Minute <span class="minute">60</span> seconds left</button>');
        $otherContainer.append($timeDisplay);
        var startingSecond = 60;
        var startingMinute = 1;
        var secondArray = [];
        for (var i = 0; i < startingSecond; i++) {
            secondArray.push(i);
        }
        secondArray.reverse();
        var minuteArray = [];
        for (var j = startingMinute; j > -1; j--) {
            minuteArray.push(j);
        }

        var m = 0;
        var h = 0;
        var coolTimer = setInterval(function() {
            if (m < secondArray.length) {
                $('span.minute').text(secondArray[m]);
                m++;
            } else {
                m = 0;
                if (h < minuteArray.length) {
                    $('span.hour').text(minuteArray[h]);
                    h++;
                } else {
                    var $cashLeft = parseInt($('span.cashAmount').text());
                    var profit = $cashLeft - 100;
                    if (profit > 0) {
                        alert("Time is over. You've made a profit of $" + profit);
                        clearInterval(coolTimer);
                        stopTheGame();
                    } else if (profit === 0) {
                        alert("Time is over and you didn't make any profit.");
                        clearInterval(coolTimer);
                        stopTheGame();
                    } else {
                        var loss = 100 - $cashLeft;
                        alert("Time is over. You have lost $" + loss);
                        clearInterval(coolTimer);
                        stopTheGame();
                    }
                    m = secondArray.length;
                }
            }
        }, 500);
    }

    var bakeCupcake = function(n) {
        //this function will create the object cupcake and place them on the screen
        //everytime a new back of cupcakes are created, it'll cost the owner
        //this function will trigger on a click on the screen
        var totCupcakes = totalCupcakes(0);

        if ((totCupcakes + n) <= 10) {
            var $baking = $('<i class="baking fa fa-refresh fa-spin fa-3x fa-fw"></i>')
            $cupcakeContainer.append($baking);
            setTimeout(function() {
                // totCupcakes = totalCupcakes(n);
                var totsCupcakes = totalCupcakes(n);
                // var $newbatch = $('<div class="cupcake' + totCupcakes + '""></div>');
                // $container.append($newbatch);
                updateCash(0, 10);
                $('i.baking').remove();
                return totsCupcakes;
            }, 2000);
        } else {
            alert("Not enouch space in the cupcake display case.")
                // var $newbatch = $('<button type="button" class="btn btn-warning cupcake' + totCupcakes + '""></button>');
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
        $('.prevBatch').remove();
        var $updatedCC = $('<div class=" cupcake prevBatch cupcake' + $cupcakesLeft + '""></div>');
        $otherContainer.append($updatedCC);
        return $cupcakesLeft;
    }
    var randomIndexFunc = function(n) {
        var randomIndex = Math.ceil(Math.random() * n);
        return randomIndex;
    };
    //these arrays will hold customer requirements in order of creation
    var customerArray = []; //this array contains the other 3 arrays
    var customerQ = []; //this array contains the DOM elements of customers
    var priceSens = []; //this array contains price sensitivity of customers
    var custDemands = [] //this array contains how many cupcakes customers want
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
        }
    };
    var newCustomerDemand = function() {
        for (var i = 0; i < customerQ.length; i++) {
            var demand = Math.ceil(Math.random() * 5);
            custDemands.push(demand);
        };
        if ($('.demand').length <= 3) {
            if ($('li.firstCustomer').length > 0) {
                var $firstCustDemand = $('<div class="demand custDemand1 btn btn-default">Next customer wants <span>' + custDemands[0] + '</span> cupcake(s)</div>');
                $('.customerContainer').append($firstCustDemand);
            }
            if ($('li.secondCustomer').length > 0) {
                var $secondCustDemand = $('<div class="demand custDemand2 btn btn-default">Next customer wants <span>' + custDemands[1] + '</span> cupcake(s)</div>');
                $('.customerContainer').append($secondCustDemand);
            }
            if ($('li.thirdCustomer').length > 0) {
                var $thirdCustDemand = $('<div class="demand custDemand3 btn btn-default">Next customer wants <span>' + custDemands[2] + '</span> cupcake(s)</div>');
                $('.customerContainer').append($thirdCustDemand);
            }
        }
    };

    var positioningCustomers = function() {
        //this function positions the customers according to their place in que
        var $firstCustomer = $('ul li:nth-child(1)');
        $firstCustomer.addClass('firstCustomer');
        var $secondCustomer = $('ul li:nth-child(2)');
        $secondCustomer.addClass('secondCustomer');
        var $thirdCustomer = $('ul li:nth-child(3)');
        $thirdCustomer.addClass('thirdCustomer');

    }

    var customerCreation = function() {
        var maxCustomer = 3; //max is three because that's how many customer classes I created in CSS. If I add more CSS, I can have more customers
        var n = randomIndexFunc(maxCustomer); //this is to make sure I am not creating a customer I don't have a class for in CSS
        if (customerQ.length < maxCustomer) {
            // <i class="fa fa-male" aria-hidden="true"></i>
            var $createCustomer = $('<li></li>');
            // var $createCustomer = $('<li class="customer' + n + '""></li>');
            $createCustomer.addClass('customer');
            var $customerList = $('ul.customerGroup')
            $customerList.append($createCustomer);
            customerQ.push($createCustomer);
        }
        positioningCustomers();
        newCustomerDemand();
        priceSensitivity();
    };

    var randomizedCustomerCreation = function() {
            if (customerQ.length < 4) {
                var binary = Math.round(Math.random());
                setInterval(function() {
                    if (binary === 1) {
                        customerCreation();
                    }
                }, 1000);
            }
        }
        // randomizedCustomerCreation();

    var ringUpSale = function() {
        var nprice = parseInt($('span.ccPrice').text());

        var customersOnQueue = customerQ[0];
        //Chooses the first customer
        var customerDemand = custDemands[0];
        //check how many cupcakes the customer wants
        var customerPriceSensitivity = priceSens[0];
        //how much is that customer willing to pay
        var $cupcakeLeft = parseInt($('.numOfCC').text());
        console.log("nprice " + nprice);
        console.log("priceSends " + priceSens[0]);
        if (customerDemand <= $cupcakeLeft) {
            if (nprice <= priceSens[0]) {
                var totalPrice = customerDemand * nprice;
                $('.registerValue').text(totalPrice);
                updateCash(totalPrice, 0);
                totalCupcakes(-customerDemand);
                customerQ.shift();
                var $firstCustomer = $('ul li:nth-child(1)');
                $firstCustomer.remove();
                custDemands.shift();
                $('.custDemand1').remove();
                priceSens.shift();
                var $secondCustomer = $('ul li:nth-child(2)');
                $secondCustomer.remove();
                $('.custDemand2').remove();
                var $thirdCustomer = $('ul li:nth-child(3)');
                $thirdCustomer.remove();
                $('.custDemand3').remove();
                positioningCustomers();
            } else {
                alert("Your prices are too expensive!")
                $('.registerValue').text(0);
                customerQ.shift();
                var $firstCustomer = $('ul li:nth-child(1)');
                $firstCustomer.remove();
                custDemands.shift();
                $('.custDemand1').remove();
                priceSens.shift();
            }
        }
        // alert("You don't have enough cupcakes to sell. Start baking another batch.")
    }

    //Starting The Game
    $('.start_btn').on('click', function() {
        startTime();
        $('.start_btn').fadeOut('400', function() {});;
        setInterval(function() {
            randomizedCustomerCreation();
        }, 1000);
        $('button.bake_btn').on('click', function() {
            bakeCupcake(5);
        })
        $('.ringUp').on('click', function() {
            if ($('.customer').length > 0) {
                ringUpSale();
            } else {
                alert("There is no customer yet.")
            }
            //maybe this function should be connected to an advertisement campaign that costs money
        })
        $('.price').on('click', function() {
            priceSet();
        })
    })



});
