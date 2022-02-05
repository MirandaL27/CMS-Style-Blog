function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-l').value.trim();
    const password = document.querySelector('#password-l').value.trim();
  
    if (email && password) {
    fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
            document.location.replace('/dashboard')
          } else {
            alert(response.statusText);
          }
      });
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-s').value.trim();
    const email = document.querySelector('#email-s').value.trim();
    const password = document.querySelector('#password-s').value.trim();
  
    if (username && email && password) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
            console.log('success');
          } else {
            alert(response.statusText);
          }
      });
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);