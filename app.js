(function(){
    
    function _(x) {
        return document.querySelector(x);
    }
    

    function generateTweetButton(text) {
        
      if(text.length > 140) {
          text = text.substr(0,138) + "..."
      }  
      var tweetButton = document.createElement('a'); // We create a new element (<a>)
      tweetButton.setAttribute('href', 'https://twitter.com/share'); // We set the href attribute to the default
      tweetButton.setAttribute('class', 'twitter-share-button'); // We set the class to the default
      tweetButton.setAttribute('data-count', 'horizontal'); // We want to display the amount of times this has been twitted
      tweetButton.setAttribute('data-text', text); // We set the text to whatever we passed to the function
      return tweetButton;  // We return the element
    }
    
    var elRandomQuoteButton = _('button.random-quote'),
        elQuoteContainer    = _('.quote-text'),
        elAuthor            = _('.said-by');
    
    
    elRandomQuoteButton.addEventListener('click', function() {
      document.querySelector('iframe').remove(); // We remove the previous button iframe

       // Every time the button is clicked the function will update the page.
       newRandomQuote(quotes, elQuoteContainer, elAuthor);
        
       twttr.widgets.load(); // We force the reload using the twttr object that we have created in the index.html file
    
    });
 
    function newRandomQuote(quoteArray, quoteElement, authorElement) {
 
        var newQuote = quoteArray[randomGen(0, quoteArray.length - 1)];
        
        quoteElement.innerText = newQuote.quote;
        authorElement.innerText = newQuote.author;
        
        var tweetButton = generateTweetButton(newQuote.quote); // We create a new tweet button with the new quote text.
        document.querySelector('.main-container').appendChild(tweetButton); // We append the tweet button as the last element in the main-container div
 
        function randomGen(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    
    
    
    
    
    
    
})();