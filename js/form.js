document.querySelector("form").addEventListener("submit", function(event) {
    // Get the values of name and email
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    // Validate name
    if (name === "") {
        alert("Name is required");
        event.preventDefault();  // Prevent form submission
        return;  // Exit the function to prevent further validation
    }

    // Validate email
    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        event.preventDefault();  // Prevent form submission
        return;  // Exit the function to prevent further validation
    }

    // If validation passes, show a success message
    alert("Form submitted!");
});
