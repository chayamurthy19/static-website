// Array to store contact form details (in memory, not used in this version)
const formDataArray = [];

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

    // Push the form data object into the array (for local use, not required for sending)
    formDataArray.push(formData);

    // Send the data to the Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxK5Cb8s113t7pWPlEh__p6D8EWliRHEzvHQ6Iv8zUr6OmZPBgQ8l-MF_DxB52t8AYa/exec', {  // Replace 'YOUR_WEB_APP_URL' with your Google Apps Script web app URL
        method: 'POST',
        mode: 'no-cors', // Prevent CORS issues
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        console.log('Data sent to Google Drive successfully!');
        alert('Thank you for contacting us! Your message has been saved.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });

    // Optionally, clear the form fields after submission
    document.getElementById('contactForm').reset();
});
