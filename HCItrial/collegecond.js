// Function to handle form submission and redirect to college selection page
document.getElementById("goToCollegeSelection").addEventListener("click", function() {
    // Validate the enrollment form
    const form = document.getElementById("enrollmentForm");
    if (form.checkValidity()) {
        // Redirect to the college selection page
        window.location.href = "college-selection.html"; // Adjust the path as needed
    } else {
        // If form is invalid, show validation messages
        form.reportValidity();
    }
});

// Handle college selection and logo display
const collegeSelect = document.getElementById("collegeSelect");
const collegeLogo = document.getElementById("collegeLogo");

collegeSelect.addEventListener("change", function() {
    switch (this.value) {
        case "College of Criminal Justice":
            collegeLogo.src = "criminal-justice-logo.png"; // Path to Criminal Justice logo
            break;
        case "College of Engineering and Technology":
            collegeLogo.src = "engineering-technology-logo.png"; // Path to Engineering logo
            break;
        case "College of Teacher's Education":
            collegeLogo.src = "teachers-education-logo.png"; // Path to Teacher's Education logo
            break;
        case "College of Business Education":
            collegeLogo.src = "business-education-logo.png"; // Path to Business Education logo
            break;
        case "College of Arts and Sciences":
            collegeLogo.src = "arts-sciences-logo.png"; // Path to Arts and Sciences logo
            break;
        case "College of Allied Health and Sciences":
            collegeLogo.src = "allied-health-logo.png"; // Path to Allied Health logo
            break;
        default:
            collegeLogo.src = ""; // Clear the logo if no college is selected
            break;
    }
    collegeLogo.style.display = this.value ? "block" : "none"; // Show or hide the logo
});
