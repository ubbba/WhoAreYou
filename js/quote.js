const quotes = [
  {
    quote: "많고 많은 사람 중에 그대 한 사람",
  },
  {
    quote: "너무 맑고 초롱한 그 중 하나 별이여",
  },
  {
    quote: "그대만큼 사랑스러운 사람을 본 일이 없다.",
  },
  {
    quote: "큰 바다 넓은 하늘을 우리는 가졌노라",
  },
  {
    quote: "흙에서 자란 내 마음 파아란 하늘빛",
  },
  {
    quote: "넓음과 깊음을 가슴에 채우며",
  },
  {
    quote: "햇살도 둥글둥글하게 뭉치는 맑은 날",
  },
];

const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

const today = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = today.quote;
// author.innerText = today.author;
