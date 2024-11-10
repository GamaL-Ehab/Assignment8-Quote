var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”", author: "--Oscar Wilde"
  },
  {
    quote: "“So many books, so little time.”", author: "--Frank Zappa"
  },
  {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "--Albert Einstein"
  },
  {
    quote: "“A room without books is like a body without a soul.”", author: "--Marcus Tullius Cicero"
  },
  {
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "--Bernard M. Baruch"
  },
  {
    quote: "“Be the change that you wish to see in the world.”", author: "--Mahatma Gandhi"
  },
  {
    quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "--Robert Frost"
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”", author: "--Mark Twain"
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”", author: "--Oscar Wilde"
  },
  {
    quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: "--Mahatma Gandhi"
  }
];

var lastIndex;

function randomQuote() {
  var index;
  do {
    index = Math.trunc(Math.random() * quotes.length);
  } while (index == lastIndex);

  lastIndex = index;

  var rndQuote = quotes[index];
  document.getElementById("quote").innerHTML = rndQuote.quote;
  document.getElementById("author").innerHTML = rndQuote.author;
  
  console.log(index); 
}

document.getElementById("btn").onclick = randomQuote;
