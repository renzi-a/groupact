document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value.trim();
    var email = document.querySelector("[name='email']").value.trim();

    // Validate name
    if (name === "") {
        alert("Name is required");
        event.preventDefault();
        return;
    }

    // Validate email
    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        event.preventDefault();
    }

    // If all good:
    alert("Form submitted!");
});
