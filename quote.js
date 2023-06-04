const quotes = [
    {
        quote : "가는 말이 고우면 얕본다"
        
    },
    {
        quote : "세번 참으면 호구된다"
       
    },
    {
        quote : "어려운 길은 길이 아니다"
        
    },

    
    ];
    
    const quote = document.querySelector("#quote span:first-child");
    // const author = document.querySelector("#quote span:last-child");
    
    const today = quotes[Math.floor(Math.random()*quotes.length)];
    
    quote.innerText = today.quote;
    // author.innerText = today.author;