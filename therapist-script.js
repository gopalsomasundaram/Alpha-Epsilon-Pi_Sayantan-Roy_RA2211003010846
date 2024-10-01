document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Dummy credentials
    const dummyUsername = 'therapist123';
    const dummyPassword = 'password123';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === dummyUsername && password === dummyPassword) {
            // Redirect to the video call feature page
            window.location.href = 'https://peppy-pony-6a5982.netlify.app/';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
}); 
