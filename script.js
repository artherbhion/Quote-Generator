function displayRandomQuote() {
    const quotes = [
        { text: "I don't want countless memories, I just want one good memory.", author: "Arther Bhion C" },
        { text: "Follow your heart,it is the only thing which is honest with you.", author: "Arther Bhion C" },
        { text: "Not every stone becomes a capstone.", author: "Arther Bhion C" },
        { text: "Don't expect life to be fair.", author: "Jhon.F.Kenedy" },
        { text: "Don't lose your head saving one minute.", author: "NLC " },
        { text: "Every pot has a lid.", author: "Sarah Mlynowski " },
        { text: "The only real mistake is that from which you learn nothing.", author: "Henry Ford" },
        { text: "Time has the power to make a black coal into a shiny diamond.", author: "Arther Bhion C" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einsten" },
        { text: "Do or do not, there is no try.", author: "Yoda" }

    ];
    

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = selectedQuote.text;
    document.getElementById("author").innerText = selectedQuote.author;
}
window.onload = displayRandomQuote;

