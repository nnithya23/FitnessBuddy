// YouTube Data API Key
const API_KEY = 'AIzaSyBz3CoZCjsvXZd8fHiGZiwDfSFAYYQe40o';

// Function to fetch YouTube videos based on workout type
function fetchYouTubeVideos(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}+workout&type=video&key=${API_KEY}&maxResults=4`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = ''; // Clear previous videos

            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;

                // Create video iframe
                const videoFrame = document.createElement('iframe');
                videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
                videoFrame.width = "300";
                videoFrame.height = "200";
                videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                videoFrame.allowFullscreen = true;

                // Append the iframe to the video container
                videoContainer.appendChild(videoFrame);
            });
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
}

// Call the function with default query (e.g., 'Cardio workout')
fetchYouTubeVideos('Cardio workout');

// Add event listeners to categories for dynamic video fetching
document.getElementById('meditation').addEventListener('click', () => fetchYouTubeVideos('Meditation workout'));
document.getElementById('yoga').addEventListener('click', () => fetchYouTubeVideos('Yoga workout'));
document.getElementById('cardio').addEventListener('click', () => fetchYouTubeVideos('Cardio workout'));
document.getElementById('strength').addEventListener('click', () => fetchYouTubeVideos('Strength workout'));
