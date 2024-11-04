function showModal(message, redirect) {
    document.getElementById("modal-message").textContent = message;
    document.getElementById("success-modal").style.display = "block";

    // If redirect is true, set up the event listener for the button
    if (redirect) {
        document.getElementById("modal-button").onclick = function() {
            window.location.href = "home.html"; // Change to your target page
        };
    }
}

function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}

// Update addacc to call showModal correctly
function addacc() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    if (!usernameregex.test(username)) {
        showModal("Enter Valid Email ID", false);
        return false;
    }
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;
    if (!passwordregex.test(password)) {
        showModal("Enter Valid Password", false);
        return false;
    }

    if (localStorage.getItem(username)) {
        showModal("Account Already Exists", false);
        return false;
    } else {
        localStorage.setItem(username, password);
        showModal("Account created successfully!", true); // Pass true to redirect
        return true;
    }
}

// Update validate to call showModal correctly
function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;

    // Check if username is valid
    if (!usernameregex.test(username)) {
        alert("Incorrect Email Or Password");
        return false;
    }

    // Check if password is valid
    if (!passwordregex.test(password)) {
        alert("Incorrect Email Or Password");
        return false;
    }

    // Validate login credentials
    if (localStorage.getItem(username) !== password) {
        alert("Incorrect Email Or Password");
        return false;
    }

    // If all validations pass, show the success modal
    showModal("Login successful!", true); // Pass true to redirect
    return false; // Prevent form submission
}

// Prevent default form submission
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the form submission
    validate(); // Call validate function
});
