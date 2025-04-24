// main.js
// All JavaScript for Phoenix Club goes here 🦅

// Handle login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Dummy users (for local-only use)
        const validUsers = [
          { email: 'member1@example.com', password: 'password123' },
          { email: 'member2@example.com', password: 'password456' }
        ];
  
        const user = validUsers.find(
          user => user.email === email && user.password === password
        );
  
        if (user) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          window.location.href = 'members.html';
        } else {
          alert('Invalid email or password.');
        }
      });
    }
  
    // Handle registration (optional for future enhancements)
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
      registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html';
      });
    }
  });
  