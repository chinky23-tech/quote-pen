/*
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    // Quote data - 5 quotes for each category
    const quotes = [
        // Motivational Quotes
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivational" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivational" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "motivational" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "motivational" },
        { text: "Your limitation—it's only your imagination.", author: "Unknown", category: "motivational" },
        
        // Inspirational Quotes
        { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", category: "inspirational" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", category: "inspirational" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", category: "inspirational" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "inspirational" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "inspirational" },
        
        // Nature Quotes
        { text: "In every walk with nature one receives far more than he seeks.", author: "John Muir", category: "nature" },
        { text: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir", category: "nature" },
        { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein", category: "nature" },
        { text: "Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson", category: "nature" },
        { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson", category: "nature" },
        
        // Life Quotes
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "life" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "life" },
        { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "life" },
        { text: "Get busy living or get busy dying.", author: "Stephen King", category: "life" },
        { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "life" },
        
        // Wisdom Quotes
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", category: "wisdom" },
        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "wisdom" },
        { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", category: "wisdom" },
        { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein", category: "wisdom" },
        { text: "The wise man doesn't give the right answers, he poses the right questions.", author: "Claude Lévi-Strauss", category: "wisdom" }
    ];

    const quotesContainer = document.getElementById('quotesContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Display all quotes initially
    displayQuotes(quotes);

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter quotes
            const category = button.dataset.category;
            if (category === 'all') {
                displayQuotes(quotes);
            } else {
                const filteredQuotes = quotes.filter(quote => quote.category === category);
                displayQuotes(filteredQuotes);
            }
        });
    });

    // Function to display quotes
    function displayQuotes(quotesToDisplay) {
        quotesContainer.innerHTML = '';
        
        quotesToDisplay.forEach(quote => {
            const quoteCard = document.createElement('div');
            quoteCard.className = 'quote-card';
            quoteCard.innerHTML = `
                <p class="quote-text">"${quote.text}"</p>
                <p class="quote-author">— ${quote.author}</p>
            `;
            quotesContainer.appendChild(quoteCard);
        });
    }
});