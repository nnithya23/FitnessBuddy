// Function to fetch YouTube meditation videos based on user input duration
function fetchMeditationVideos(duration) {
    const apiKey = 'AIzaSyBz3CoZCjsvXZd8fHiGZiwDfSFAYYQe40o';
    const query = `meditation ${duration} minutes`;

    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = ''; // Clear previous videos

            // Loop through the videos and create video cards
            data.items.forEach(video => {
                const videoCard = document.createElement('div');
                videoCard.classList.add('video-card');

                const videoThumbnail = document.createElement('img');
                videoThumbnail.src = video.snippet.thumbnails.medium.url;
                videoThumbnail.alt = video.snippet.title;
                videoThumbnail.classList.add('video-thumbnail');

                const videoTitle = document.createElement('p');
                videoTitle.textContent = video.snippet.title;
                videoTitle.classList.add('video-title');

                videoCard.appendChild(videoThumbnail);
                videoCard.appendChild(videoTitle);

                videoCard.addEventListener('click', () => {
                    increaseStreak(); // Increase streak when video is watched
                });

                videoContainer.appendChild(videoCard);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Function to handle streak count
function increaseStreak() {
    let streakCount = parseInt(localStorage.getItem('streakCount')) || 0;
    streakCount += 1;
    localStorage.setItem('streakCount', streakCount);
    document.getElementById('streakCount').textContent = streakCount;
}

// Event listener for fetching videos when the "Get Videos" button is clicked
document.getElementById('fetch-videos-btn').addEventListener('click', () => {
    const duration = document.getElementById('duration').value;
    if (duration) {
        fetchMeditationVideos(duration);
    } else {
        alert('Please enter a valid duration');
    }
});

// Load the streak count from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const streakCount = localStorage.getItem('streakCount') || 0;
    document.getElementById('streakCount').textContent = streakCount;
});
