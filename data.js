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

  // Replace with your actual Google Apps Script Web App URL
  const webAppUrl = 'https://script.google.com/macros/s/AKfycbynFuL2ggw-3w4yEvXWD0XieF2_UCuskvxG18oNplceonKKh67zqpKv2Zg8Trauq0Ke/exec';  // <-- Insert your actual Web App URL

  // Send data to Google Apps Script
  fetch(webAppUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      console.log('Data sent successfully!');
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

  // Reset form after submission
  document.getElementById('contactForm').reset();
});
