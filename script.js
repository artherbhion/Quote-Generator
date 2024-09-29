function displayRandomQuote() {
    const quotes = [
        { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { text: "Do or do not, there is no try.", author: "Yoda" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = selectedQuote.text;
    document.getElementById("author").innerText = selectedQuote.author;
}
window.onload = displayRandomQuote;

