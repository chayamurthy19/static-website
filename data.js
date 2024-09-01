// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyU3kW-oryxjlO8F3JThlGMVYYP73g66DyvymODSEMMK-jl9lV1fNAuS8yh-EYbLxAU/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('Data sent to Google Drive successfully!');
            alert('Thank you for contacting us! Your message has been saved.');
        } else {
            console.error('Error:', data.message);
            alert('There was an error submitting your form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });

    // Clear the form fields after submission
    document.getElementById('contactForm').reset();
});
