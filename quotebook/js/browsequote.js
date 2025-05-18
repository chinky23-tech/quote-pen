// Sample quote data
/*const quotes = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivational",
        likes: 245,
        shares: 89,
        date: "2023-05-15"
    },
    {
        id: 2,
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "wisdom",
        likes: 189,
        shares: 45,
        date: "2023-06-20"
    },
    {
        id: 3,
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        category: "motivational",
        likes: 320,
        shares: 120,
        date: "2023-07-10"
    },
    {
        id: 4,
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        category: "wisdom",
        likes: 178,
        shares: 67,
        date: "2023-08-05"
    },
    {
        id: 5,
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
        category: "love",
        likes: 210,
        shares: 55,
        date: "2023-09-12"
    },
    {
        id: 6,
        text: "Behind every great man is a woman rolling her eyes.",
        author: "Jim Carrey",
        category: "funny",
        likes: 432,
        shares: 210,
        date: "2023-10-01"
    }
];

// DOM Elements
const quotesGrid = document.getElementById('quotes-grid');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortBy = document.getElementById('sort-by');
const loadMoreBtn = document.getElementById('load-more');

// Display quotes
function displayQuotes(quotesToDisplay) {
    quotesGrid.innerHTML = '';
    
    quotesToDisplay.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <span class="quote-category">${quote.category}</span>
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <div class="quote-actions">
                <button><i class="fas fa-heart"></i> ${quote.likes}</button>
                <button><i class="fas fa-share-alt"></i> ${quote.shares}</button>
                <button><i class="fas fa-bookmark"></i></button>
            </div>
        `;
        quotesGrid.appendChild(quoteCard);
    });
}

// Filter quotes by category
function filterByCategory(category) {
    if (category === 'all') {
        return [...quotes];
    }
    return quotes.filter(quote => quote.category === category);
}

// Sort quotes
function sortQuotes(quotesArray, sortType) {
    const sorted = [...quotesArray];
    
    switch(sortType) {
        case 'popular':
            return sorted.sort((a, b) => b.likes - a.likes);
        case 'recent':
            return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'random':
            return sorted.sort(() => Math.random() - 0.5);
        default:
            return sorted;
    }
}

// Search quotes
function searchQuotes(term) {
    if (!term) return [...quotes];
    
    const lowerTerm = term.toLowerCase();
    return quotes.filter(quote => 
        quote.text.toLowerCase().includes(lowerTerm) || 
        quote.author.toLowerCase().includes(lowerTerm)
    );
}

// Update active filter button
function updateActiveFilter(selectedBtn) {
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn === selectedBtn) {
            btn.classList.add('active');
        }
    });
}

// Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        updateActiveFilter(btn);
        const filtered = filterByCategory(category);
        const sorted = sortQuotes(filtered, sortBy.value);
        displayQuotes(sorted);
    });
});

sortBy.addEventListener('change', () => {
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter.dataset.category;
    const filtered = filterByCategory(category);
    const sorted = sortQuotes(filtered, sortBy.value);
    displayQuotes(sorted);
});

searchBtn.addEventListener('click', () => {
    const term = searchInput.value;
    const searched = searchQuotes(term);
    const sorted = sortQuotes(searched, sortBy.value);
    displayQuotes(sorted);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

loadMoreBtn.addEventListener('click', () => {
    // In a real app, this would fetch more quotes from an API
    alert('Loading more quotes...');
    // For demo, we'll just add the same quotes again
    const currentQuotes = Array.from(quotesGrid.children).length;
    const moreQuotes = [...quotes, ...quotes].slice(currentQuotes, currentQuotes + 3);
    moreQuotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <span class="quote-category">${quote.category}</span>
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <div class="quote-actions">
                <button><i class="fas fa-heart"></i> ${quote.likes}</button>
                <button><i class="fas fa-share-alt"></i> ${quote.shares}</button>
                <button><i class="fas fa-bookmark"></i></button>
            </div>
        `;
        quotesGrid.appendChild(quoteCard);
    });
});

// Initial display
displayQuotes(sortQuotes(quotes, 'popular'));*/
// Sample quote data
const quotes = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivational",
        likes: 245,
        shares: 89,
        date: "2023-05-15"
    },
    {
        id: 2,
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "wisdom",
        likes: 189,
        shares: 45,
        date: "2023-06-20"
    },
    {
        id: 3,
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        category: "motivational",
        likes: 320,
        shares: 120,
        date: "2023-07-10"
    },
    {
        id: 4,
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        category: "wisdom",
        likes: 178,
        shares: 67,
        date: "2023-08-05"
    },
    {
        id: 5,
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
        category: "love",
        likes: 210,
        shares: 55,
        date: "2023-09-12"
    },
    {
        id: 6,
        text: "Behind every great man is a woman rolling her eyes.",
        author: "Jim Carrey",
        category: "funny",
        likes: 432,
        shares: 210,
        date: "2023-10-01"
    }
];

// DOM Elements
const quotesGrid = document.getElementById('quotes-grid');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortBy = document.getElementById('sort-by');
const loadMoreBtn = document.getElementById('load-more');

// Pagination Control
let currentIndex = 0;
const QUOTES_PER_LOAD = 3;
let currentFilteredQuotes = [...quotes];

// Utility Functions
function getNextQuotes() {
    const next = currentFilteredQuotes.slice(currentIndex, currentIndex + QUOTES_PER_LOAD);
    currentIndex += QUOTES_PER_LOAD;
    return next;
}

// Rendering
function appendQuotes(quotesToAppend) {
    quotesToAppend.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <span class="quote-category">${quote.category}</span>
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <div class="quote-actions">
                <button class="like-btn"><i class="fas fa-heart"></i> ${quote.likes}</button>
                <button class="share-btn"><i class="fas fa-share-alt"></i> ${quote.shares}</button>
                <button class="bookmark-btn"><i class="fas fa-bookmark"></i></button>
            </div>
        `;
        quotesGrid.appendChild(quoteCard);
    });
}

// Filtering
function filterByCategory(category) {
    if (category === 'all') return [...quotes];
    return quotes.filter(q => q.category === category);
}

// Sorting
function sortQuotes(quotesArray, sortType) {
    const sorted = [...quotesArray];
    switch (sortType) {
        case 'popular':
            return sorted.sort((a, b) => b.likes - a.likes);
        case 'recent':
            return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'random':
            return sorted.sort(() => Math.random() - 0.5);
        default:
            return sorted;
    }
}

// Searching
function searchQuotes(term) {
    if (!term) return [...quotes];
    const lowerTerm = term.toLowerCase();
    return quotes.filter(quote =>
        quote.text.toLowerCase().includes(lowerTerm) ||
        quote.author.toLowerCase().includes(lowerTerm)
    );
}

// Update Buttons
function updateActiveFilter(selectedBtn) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    selectedBtn.classList.add('active');
}

// Clear and reset
function resetQuotesView(quotesToShow) {
    quotesGrid.innerHTML = '';
    currentIndex = 0;
    currentFilteredQuotes = quotesToShow;
    appendQuotes(getNextQuotes());
    loadMoreBtn.disabled = false;
    loadMoreBtn.innerText = "Load More Quotes";
}

// Load More
loadMoreBtn.addEventListener('click', () => {
    const nextQuotes = getNextQuotes();
    if (nextQuotes.length === 0) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerText = "No More Quotes";
    } else {
        appendQuotes(nextQuotes);
    }
});

// Filter Event
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        updateActiveFilter(btn);
        const filtered = filterByCategory(category);
        const sorted = sortQuotes(filtered, sortBy.value);
        resetQuotesView(sorted);
    });
});

// Sort Event
sortBy.addEventListener('change', () => {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filtered = filterByCategory(activeCategory);
    const sorted = sortQuotes(filtered, sortBy.value);
    resetQuotesView(sorted);
});

// Search Event
searchBtn?.addEventListener('click', () => {
    const term = searchInput.value;
    const searched = searchQuotes(term);
    const sorted = sortQuotes(searched, sortBy.value);
    resetQuotesView(sorted);
});

// Enter key for search
searchInput?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBtn?.click();
    }
});

// Action Buttons (Like/Share/Bookmark) using event delegation
quotesGrid.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    // Like
    if (button.classList.contains('like-btn')) {
        let count = parseInt(button.textContent.match(/\d+/)[0]);
        count++;
        button.innerHTML = `<i class="fas fa-heart"></i> ${count}`;
    }

    // Share
    if (button.classList.contains('share-btn')) {
        let count = parseInt(button.textContent.match(/\d+/)[0]);
        count++;
        button.innerHTML = `<i class="fas fa-share-alt"></i> ${count}`;
    }

    // Bookmark
    if (button.classList.contains('bookmark-btn')) {
        button.classList.toggle('bookmarked');
        button.innerHTML = `<i class="fas fa-bookmark"></i>`;
    }
});

// Initial Load
resetQuotesView(sortQuotes(quotes, 'popular'));
