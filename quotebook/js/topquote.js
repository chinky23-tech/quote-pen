  /* const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivational",
    likes: 130,
    shares: 25
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Inspirational",
    likes: 95,
    shares: 20
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Motivational",
    likes: 105,
    shares: 18
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    category: "Inspirational",
    likes: 87,
    shares: 12
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Motivational",
    likes: 70,
    shares: 10
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Inspirational",
    likes: 60,
    shares: 8
  }
];


function renderQuotes(list) {
  const container = document.getElementById('quote-list');
  container.innerHTML = list.map((q, i) => `
    <div class="quote-card">
      <p>"${q.text}"</p>
      <span>— ${q.author} (${q.category})</span>
      <div class="quote-meta">
        <button onclick="likeQuote(${i})">♥ ${q.likes}</button>
        <button onclick="shareQuote(${i})">🔗 Share</button>
      </div>
    </div>
  `).join('');
}

// Like button logic
function likeQuote(index) {
  quotes[index].likes++;
  renderQuotes(currentQuotes);
}

// Share (simulate)
function shareQuote(index) {
  const q = quotes[index];
  const fullText = `"${q.text}" — ${q.author}`;
  navigator.clipboard.writeText(fullText)
    .then(() => alert('Quote copied to clipboard!'));
}

// Filter buttons
function filterQuotes(by) {
  currentQuotes = [...quotes].sort((a, b) => b[by] - a[by]);
  renderQuotes(currentQuotes);
}

// Search input
document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = currentQuotes.filter(q =>
    q.text.toLowerCase().includes(term) || q.author.toLowerCase().includes(term)
  );
  renderQuotes(filtered);
});

// Scroll to quote section
function scrollToQuotes() {
  document.getElementById('top-quotes').scrollIntoView({ behavior: 'smooth' });
}

// Load default
let currentQuotes = [...quotes].sort((a, b) => b.likes - a.likes);
renderQuotes(currentQuotes);*/


// Sample quotes data
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        likes: 245,
        shares: 89
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        likes: 189,
        shares: 45
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        likes: 320,
        shares: 120
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        likes: 178,
        shares: 67
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        likes: 210,
        shares: 55
    }
];

// DOM elements
const quoteList = document.getElementById('quote-list');
const searchInput = document.getElementById('search');

// Display quotes
function displayQuotes(quotesArray) {
    quoteList.innerHTML = '';
    
    quotesArray.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <div class="quote-stats">
                <span><i class="like-icon">👍</i> ${quote.likes} likes</span>
                <span><i class="share-icon">↗️</i> ${quote.shares} shares</span>
            </div>
        `;
        quoteList.appendChild(quoteCard);
    });
}

// Filter quotes by likes or shares
function filterQuotes(type) {
    const sortedQuotes = [...quotes].sort((a, b) => b[type] - a[type]);
    displayQuotes(sortedQuotes);
}

// Search quotes
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) || 
        quote.author.toLowerCase().includes(searchTerm)
    );
    displayQuotes(filteredQuotes);
});

// Initial display (sorted by likes by default)
filterQuotes('likes');