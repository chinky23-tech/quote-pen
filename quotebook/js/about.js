const quotesAboutQuotes = [
      {
        text: "A quotation is a handy thing to have about, saving one the trouble of thinking for oneself, always a laborious business.",
        author: "A.A. Milne"
      },
      {
        text: "I love quotations because it is a joy to find thoughts one might have, beautifully expressed with much authority by someone recognized wiser than oneself.",
        author: "Marlene Dietrich"
      },
      {
        text: "A good quote can inspire, comfort, or make us laugh. It’s a moment of connection with someone we may never meet.",
        author: "Anonymous"
      },
      {
        text: "One must be a wise reader to quote wisely and well.",
        author: "Amos Bronson Alcott"
      }
    ];

    const quoteEl = document.getElementById('randomQuote');
    const random = quotesAboutQuotes[Math.floor(Math.random() * quotesAboutQuotes.length)];

    quoteEl.innerHTML = `
      “${random.text}”
      <div class="quote-author">— ${random.author}</div>
    `;
