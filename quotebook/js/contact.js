document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const errorDiv = document.getElementById("errorMessage");

      // Simple email regex
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

      if (!name || !email || !message) {
        errorDiv.textContent = "Please fill out all required fields.";
        return;
      }

      if (!emailPattern.test(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        return;
      }

      errorDiv.textContent = ""; // Clear error

      // Simulate successful submission (replace this with fetch/ajax if needed)
      alert("Thank you for contacting us, " + name + "!");
      document.getElementById("contactForm").reset();
    });
