document.addEventListener("DOMContentLoaded", function() {
const addQuoteBtn = document.getElementById("addQuoteBtn");
const quoteModal = document.getElementById("quoteModal");
const quoteForm = document.getElementById("quoteForm");
const cancelBtn = document.getElementById("cancelBtn");
//open modal when add quote button is clicked
addQuoteBtn.addEventListener("click", function() {
    quoteModal.style.display = "flex";
});
//close modal when cancel button is clicked
 cancelBtn.addEventListener("click", function () {
    quoteModal.style.display = "none";
    qyoteForm.reset();
 });

       // Close modal when clicking outside the form
      quoteModal.addEventListener('click', function(e) {
        if (e.target === quoteModal) {
          quoteModal.style.display = 'none';
          quoteForm.reset();
        }
      });
      
      // Handle form submission
      quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const quoteText = document.getElementById('quoteText').value.trim();
        const quoteAuthor = document.getElementById('quoteAuthor').value.trim();
        const quoteCategory = document.getElementById('quoteCategory').value;
        
        if (quoteText && quoteAuthor && quoteCategory) {
          // Create new quote object
          const newQuote = {
            text: quoteText,
            author: quoteAuthor,
            category: quoteCategory,
            timestamp: new Date().toISOString()
          };
          
          // Get existing quotes from localStorage or initialize empty array
          let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
          
          // Add new quote
          quotes.push(newQuote);
          
          // Save back to localStorage
          localStorage.setItem('quotes', JSON.stringify(quotes));
          
          // Show success message
          alert('Your quote has been added successfully!');
          
          // Close modal and reset form
          quoteModal.style.display = 'none';
          quoteForm.reset();
        } else {
          alert('Please fill in all required fields.');
        }
      });
    });


// like share button functionality

  document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    const shareButtons = document.querySelectorAll('.share-btn');

    // LIKE BUTTON FUNCTIONALITY
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        let currentLikes = parseInt(button.textContent.replace('♥', '').trim());
        currentLikes++;
        button.textContent = `♥ ${currentLikes}`;
      });
    });

    // SHARE BUTTON FUNCTIONALITY
    shareButtons.forEach(button => {
      button.addEventListener('click', () => {
        const quoteCard = button.closest('.quote-card');
        const quoteText = quoteCard.querySelector('p').textContent;
        const authorText = quoteCard.querySelector('span').textContent;

        const fullQuote = `${quoteText} ${authorText}`;
        const shareData = {
          title: 'Quote',
          text: fullQuote,
          url: window.location.href
        };

        if (navigator.share) {
          navigator.share(shareData)
            .then(() => console.log('Quote shared successfully'))
            .catch(error => console.error('Error sharing:', error));
        } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(fullQuote)
            .then(() => alert('Quote copied to clipboard'))
            .catch(err => alert('Failed to copy quote'));
        }
      });
    });
  });

