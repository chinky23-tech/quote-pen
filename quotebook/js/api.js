document.getElementById("new-quote").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").textContent = `"${data.content}"`;
      document.getElementById("author").textContent = `— ${data.author}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      document.getElementById("quote").textContent = "Failed to load quote.";
      document.getElementById("author").textContent = "";
    });
}
