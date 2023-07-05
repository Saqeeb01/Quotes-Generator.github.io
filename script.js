const quotes=[
    {
        quote:"I'm not here to be perfect, I'm here to be real." ,

        author: "~Lady Gaga"
    },

    {
        quote:"I'm not interested in money. I just want to be wonderful." ,

        author:"~ Marilyn Monroe"
    },

    {
        quote:"The only thing that feels better than winning is winning when nobody thought you could."
        ,

        author:" ~ Hank Aaron"
    },

    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",

        author:"- Winston Churchill"
    },

    {
        quote:"If you can dream it, you can do it.",

        author:" ~Walt Disney"
    }
];

const btn = document.getElementById("btn")
const Quotes = document.getElementById("quote");
const Author = document.getElementById("author");

btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quotes.length);
    let generate =quotes[random];
    quote.innerHTML=generate.quote;
    author.innerHTML=generate.author;
    console.log(random);
 })