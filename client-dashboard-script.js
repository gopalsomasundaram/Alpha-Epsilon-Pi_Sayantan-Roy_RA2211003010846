document.addEventListener('DOMContentLoaded', () => {
    const userDisplay = document.getElementById('userDisplay');
    const startVideoCallButton = document.getElementById('startVideoCall');

    const username = localStorage.getItem('clientUsername');
    if (username) {
        userDisplay.textContent = username;
    } else {
        window.location.href = 'client-login.html';
    }

    startVideoCallButton.addEventListener('click', () => {
        window.open('https://peppy-pony-6a5982.netlify.app/', '_blank');
    });
});
