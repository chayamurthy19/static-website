fetch('https://script.google.com/macros/s/AKfycbzrJceOwPXajLEGJZzo-j9Nz22F21lam6_I-VBsZoVktrT5Fn0277t3y0IiS5iR9RjJ/exec', {
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
