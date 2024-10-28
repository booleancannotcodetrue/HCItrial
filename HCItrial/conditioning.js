document.addEventListener("DOMContentLoaded", function() {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    
    const nextToStep2 = document.getElementById("nextToStep2");
    const backToStep1 = document.getElementById("backToStep1");
    const nextToStep3 = document.getElementById("nextToStep3");
    const backToStep2 = document.getElementById("backToStep2");
    
    const form = document.getElementById("enrollmentForm");

    // Go to Step 2
    nextToStep2.addEventListener("click", function() {
        const selectedCourse = document.getElementById("courseSelect").value;
        if (!selectedCourse) {
            alert("Please select a course.");
            return;
        }
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
    });

    // Go back to Step 1
    backToStep1.addEventListener("click", function() {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
    });

    // Go to Step 3
    nextToStep3.addEventListener("click", function() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        let errors = [];
        if (!name) errors.push("Name is required.");
        if (!email) errors.push("Email is required.");
        if (!validateEmail(email)) errors.push("Email is not valid.");

        // Show errors if any
        const errorDisplay = document.getElementById("errorMessages");
        errorDisplay.innerHTML = ""; // Clear previous errors
        if (errors.length > 0) {
            errors.forEach(error => {
                const li = document.createElement("li");
                li.textContent = error;
                errorDisplay.appendChild(li);
            });
            return; // Stop if there are errors
        }

        // Set confirmation message
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `You have selected ${document.getElementById("courseSelect").value} and provided the name: ${name} and email: ${email}.`;
        
        step2.classList.add("hidden");
        step3.classList.remove("hidden");
    });

    // Go back to Step 2
    backToStep2.addEventListener("click", function() {
        step3.classList.add("hidden");
        step2.classList.remove("hidden");
    });

    // Form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default submission
        
        // Handle final submission logic here (e.g., send data to server)
        alert("Form submitted successfully!");
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
