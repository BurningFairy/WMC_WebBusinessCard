// Validation for contact form

// waits until entire page has loaded
document.addEventListener("DOMContentLoaded", () => {
    // makes a variable out of the html form element
    const form = document.getElementById("contactForm");

    // starts when the form is submitted
    form.addEventListener("submit", (event) => {
        // prevents reloading the page
        event.preventDefault();

        // gets values from input fields
        const hasPets = document.getElementById("hasPets").checked;
        const petNum = Number(document.getElementById("petNum").value);
        const msg = document.getElementById("msg").value.trim();
        const name = document.getElementById("name").value.trim();
        const mail = document.getElementById("mail").value.trim();

        // checks if name is at least 2 characters long
        if (name.length < 2) {
            alert("Please enter your name (at least 2 characters).");
            return;
        }

        // checks if email is filled in + basic format check
        if (mail.length < 5) {
            alert("Please enter your email.");
            return;
        }
        if (!mail.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        // check if message is long enough
        if (msg.length < 10) {
            alert("Please write at least 10 characters about your pets.");
            return;
        }

        // pet number validation (0–100)
        if (Number.isNaN(petNum) || petNum < 0 || petNum > 100) {
            alert("Please enter a valid number of pets (0 to 100).");
            return;
        }

        // pet number logic
        if (hasPets && petNum === 0) {
            alert("If you have pets, the number of pets must be at least 1.");
            return;
        }
        if (!hasPets && petNum > 0) {
            alert("If you don't have pets, set the number of pets to 0 (or check the box).");
            return;
        }

        // if everything is valid
        alert("Form valid! (Demo: not submitting.)");
        form.reset();
    });
});
