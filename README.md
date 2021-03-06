# CupcakeStand
In this game, you will play the role of a capcake baker. The goal is to make as much profit as you can by the end of your time. The time goes by pretty quickly, so get to work...

###Things to know about the game
* When you click "Start", a timer appears and counts down to 0. When the timer ends, the game ends.
* When you click on "Bake a new batch", it creates a batch of 5 cupcakes. 
    * Know that it takes some timet to bake these cupcakes. 
    * Also it costs you $10 to make a new batch.
* Customers will randomly start showing up when you start the day. Don't worry, they are your friends. The more you sell to them, the more money you make. 
    * You will be notified how many cupcakes each customer wants. How many cupcakes a customer wants will be determined in random. They can only be served if you have enough cupcakes in your display.
    * The default price for cupcakes is $3. So your cash should change according to how many cupcakes you've sold to your customers.
    * Click "Ring up" to complete the transaction. You may also click on the floating demands of each customers. 
    * For those who are technically inclined, the customer randomization is created via the following:
        * At a pre-determined set interval, the program does a "GO or NO GO" to determine if it should create new customers. With each "GO", it creates new customers.
        * Customers disappear after they have been served.
* You can also set the price of the cupcake. But it's important to know that some customers are price sensitive, and they will not buy expensive cupcakes. However, while some may leave when faced with high prices, some will buy cupcakes even at higher prices. So strategize accordingly and have fun. 

###How I created it
* I first wrote out the idea of what I wanted in my notebook. 
* I then downloaded Balsamiq Mockup 3 to do my wireframe.
* Then I skectched out how I wanted my background to look and commisioned the drawing;
* I used HTML, CSS, JavaScript with jQuery for the entire game. 
* I created most items dynamically using jQuery and JavaScript.
* I created a sprite of my cupcakes so I could show different numbers of cupcakes in the stand.
* As I coded in JavaScript, I wrote some comments for what each functions were supposed to do. 
* I had a few user experience feedback to improve the experience.
* Finally, I published my game at https://jayanzaman.github.io/CupcakeStand/

 
