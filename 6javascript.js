const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login data to the server using AJAX
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Handle successful login
      console.log('Login successful!');
      // Redirect to the dashboard or another page
      window.location.href = '/dashboard';
    } else {
      // Handle login error
      alert('Login failed: ' + data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});