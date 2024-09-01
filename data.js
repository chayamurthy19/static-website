document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent traditional form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name: name,
    email: email,
    message: message
  };

  const webAppUrl = 'YOUR_WEB_APP_URL_HERE';  // Replace with your actual Web App URL

  fetch(webAppUrl, {
    method: 'POST',
    mode: 'no-cors',  // Set mode to 'no-cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    // In no-cors mode, the response is opaque, so you cannot access it.
    console.log('Data sent successfully!');
    alert('Thank you for contacting us! Your message has been saved.');
  })
  .catch(error => {
    // In no-cors mode, you won't get detailed error information
    console.error('Error:', error);
    alert('There was an error submitting your form. Please try again.');
  });

  // Reset form after submission
  document.getElementById('contactForm').reset();
});
