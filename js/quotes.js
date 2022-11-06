const quotes= [
{
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, 
{
    quote: "The way to get started is to quit talking and begin doing",
    author:"Walt Disney"
},
{
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author:"Steve Jobs"
},
{
    quote: "If life were predictable it would cease to be life, and be without flavor",
    author:"Eleanor Roosevelt"
},
{
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author:"Oprah Winfrey"
},
{
    quote: "The only impossible journey is the one you never begin",
    author:"Tony Robbins"
},
{
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison"
},
{
    quote: "If you really look closely, most overnight successes took a long time.",
    author:"Steve Jobs"
},
{
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author:"Henry David Thoreau"
}
]

const quote= document.querySelector("#quotes>span:first-child");
const author=document.querySelector("#quotes>span:last-child");
const todaysQuote= quotes[Math.floor(Math.random()* quotes.length)];



quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;


