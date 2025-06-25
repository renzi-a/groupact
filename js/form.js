document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value.trim();
    var email = document.querySelector("[name='email']").value.trim();

    // Validate name
    if (name === "") {
        alert("Name is required");
        event.preventDefault(); // Stop form submission
        return;
    }

    // Validate email
    if (!email.includes('@')) {
        alert("Invalid email");
        event.preventDefault(); // Stop form submission
        return;
    }

    alert("Form submitted!");
});
