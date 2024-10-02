document.getElementById('fetch-yoga-videos').addEventListener('click', function() {
    const duration = document.getElementById('duration').value || 30; // Default to 30 minutes if no input
    const query = `yoga workout ${duration} minutes`;
    fetchYogaVideos(query);
});

function fetchYogaVideos(query) {
    const apiKey = 'AIzaSyBz3CoZCjsvXZd8fHiGZiwDfSFAYYQe40o'
;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = ''; // Clear previous videos

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

                // Event listener for increasing streak when the video is watched
                videoCard.addEventListener('click', () => {
                    handleStreak();
                });

                videoContainer.appendChild(videoCard);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Function to handle streak count based on daily progress
function handleStreak() {
    const currentDate = new Date().toDateString();
    let lastWatchedDate = localStorage.getItem('lastWatchedDate');
    let streakCount = parseInt(localStorage.getItem('streakCount')) || 0;

    if (lastWatchedDate !== currentDate) {
        streakCount += 1;
        localStorage.setItem('streakCount', streakCount);
        localStorage.setItem('lastWatchedDate', currentDate);
    }
    document.getElementById('streakCount').textContent = streakCount;

    // Also update the streak count in the home page
    updateHomePageStreak(streakCount);
}

function updateHomePageStreak(streakCount) {
    // Assuming you store the streak count in localStorage and read it on the home page
    localStorage.setItem('streakCount', streakCount);
}

document.addEventListener('DOMContentLoaded', () => {
    const streakCount = localStorage.getItem('streakCount') || 0;
    document.getElementById('streakCount').textContent = streakCount;
});
