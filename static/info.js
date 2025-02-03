document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    

    // Add a click event listener to each button
    const moreInfoButtons = document.querySelectorAll('.more-info-button');
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target from the button's data attribute
            const target = button.getAttribute('data-target');
            // Redirect to the corresponding page based on the target
            window.location.href = `${target}`;
        });
    });
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validate the form fields here (e.g., check if email is valid).

        // If validation passes, you can display a confirmation message:
        confirmationMessage.innerText = "Thank you for your message! We will get back to you soon.";

        // Clear the confirmation message after 2 seconds
        setTimeout(function () {
            confirmationMessage.innerText = "";
        }, 1500); // 2000 milliseconds = 2 seconds

        // Reset the form after displaying the message
        contactForm.reset();
    });
});
