

// Function to fetch YouTube videos based on the selected workout type and duration
function fetchYouTubeVideos(workoutType, duration) {
    const apiKey = 'AIzaSyBz3CoZCjsvXZd8fHiGZiwDfSFAYYQe40o'; // Replace with your YouTube API key
    const query = `${workoutType} workout ${duration} minutes`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.items; // Return the list of videos
        })
        .catch(error => {
            console.error('Error fetching YouTube videos:', error);
            return [];
        });
}

// Function to display the fetched YouTube videos on the page
function displayVideos(videos, containerId) {
    const videoContainer = document.getElementById(containerId);
    videoContainer.innerHTML = ''; // Clear previous videos

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoThumbnail = video.snippet.thumbnails.medium.url;

        const videoElement = `
            <div class="video-item">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                <h3>${videoTitle}</h3>
            </div>
        `;
        videoContainer.innerHTML += videoElement;
    });
}

// Example usage in a workout page:
// Assume you have a button to trigger fetching videos based on the workout type and duration
document.getElementById('fetchVideosBtn').addEventListener('click', function() {
    const workoutType = 'strength'; // This would be dynamic based on the page (strength, yoga, etc.)
    const duration = document.getElementById('durationInput').value;

    if (duration > 0) {
        fetchYouTubeVideos(workoutType, duration)
            .then(videos => {
                displayVideos(videos, 'videosList');
            });
    } else {
        alert('Please enter a valid duration.');
    }
});
