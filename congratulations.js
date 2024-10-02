document.addEventListener('DOMContentLoaded', function() {
    const streakCount = localStorage.getItem('streakCount') || 0;
    document.getElementById('streakCount').textContent = streakCount;

    // Go to home page when button is clicked
    document.getElementById('go-home').addEventListener('click', function() {
        window.location.href = 'home.html'; // Redirect to home page
    });
});
