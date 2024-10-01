document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        if (username) {
            // Store the username (you might want to use this in the video call feature)
            localStorage.setItem('clientUsername', username);
            // Redirect to the video call feature page
            window.location.href = 'https://peppy-pony-6a5982.netlify.app/';
        } else {
            alert('Please enter a valid Reddit username.');
        }
    });
});
