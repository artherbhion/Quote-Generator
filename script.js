function displayRandomQuote() {
    const quotes = [
        { text: "I don't want countless memories, I just want one good memory.", author: "Arther Bhion C" },
        { text: "Follow your heart,it is the only thing which is honest with you.", author: "Arther Bhion C" },
        { text: "Not every stone becomes a capstone.", author: "Arther Bhion C" },
        { text: "Don't expect life to be fair.", author: "Jhon.F.Kenedy" },
        { text: "Don't lose your head saving one minute.", author: "Instruction I got In NLC" },
        { text: "Every pot has a lid.", author: "Sarah Mlynowski " },
        { text: "The only real mistake is that from which you learn nothing.", author: "Henry Ford" },
        { text: "Time has the power to make a black coal into a shiny diamond.", author: "Arther Bhion C" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einsten" },
        { text: "Do or do not, there is no try.", author: "Yoda" },
        { text: "When you help someone, you help everyone.", author: "May" },
        { text: "If you want to fool your enemies, Then you must fool yourself.", author: "Buggy The Clown" },
        { text: "I helped a man climb a mountain and found that ,I too has reached the top.", author: "Anonymous" },
        { text: "Successful people have two things on their face Silence and Smile. smile to solve problems and silence to avoid problems.", author: "APJ Abdul Kalam" },
        { text: "The worst thing about betrayal is that it never comes from your enemies. It comes from friends and loved ones.", author: "Unknown" },
        { text: "Once the rain is over, an umbrella becomes a burden to everyone.", author: "Pollard " },
        { text: "Dead people receive more flowers than the living ones because the regret is stronger than gratitude.", author: "Anne Frank" },
        { text: "There is no greater power on this earth than story.", author: "Libba Bray" },
        { text: "I wish there was a way to know you were in the good old days before you actually left them.", author: "Ed Helms" },
        { text: "Not everyone can become a great artist, but a great artist can come from anywhere.", author: "Peter O'Toole" },
        { text: "Don’t give your past the power to define your future", author: "Dr. Heather Browne" },
        { text: "Be you do you for you.", author: "Mr.Bean" },
        { text: "Things never happen the same way twice.", author: "C.S.Lewis" },
        { text: "And in the end, its not the years in your life that count. It’s the life in your years.", author: "James Van Praagh" },
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
        { text: "Today’s accomplishments were yesterday’s impossibilities.", author: "Robert H. Schuller" },
        { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
        { text: "If you want a happy ending, that depends, of course, on where you stop your story.", author: "Orson Welles" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now..", author: "Chinese proverb" },
        { text: "If only we started younger then we would have been so much better, If we knew back then what we knew now Things would change... ", author: "Iroh" },
        { text: "Today is the Youngest you will ener be again and you still have enough time all you wanted to become.", author: "Chinese proverb" },
    ];
    

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = selectedQuote.text;
    document.getElementById("author").innerText = selectedQuote.author;
}
window.onload = displayRandomQuote;

