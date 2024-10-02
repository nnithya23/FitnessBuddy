

// Reference to Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// Function to fetch YouTube videos based on the input duration
document.getElementById('fetchVideosBtn').addEventListener('click', function() {
    const duration = document.getElementById('durationInput').value;
    
    if (duration > 0) {
        fetchStrengthVideos(duration);
    } else {
        alert('Please enter a valid duration.');
    }
});

// Function to fetch YouTube videos using YouTube Data API
function fetchStrengthVideos(duration) {
    const apiKey = 'AIzaSyBz3CoZCjsvXZd8fHiGZiwDfSFAYYQe40o'; // Add your YouTube API key here
    const query = `strength workout ${duration} minutes`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayVideos(data.items);
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
}

// Function to display fetched YouTube videos with embedded players
function displayVideos(videos) {
    const videoContainer = document.getElementById('videosList');
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

// Function to increase streak count in Firebase after watching a video
function increaseStreak() {
    const user = auth.currentUser;
    
    if (user) {
        const userStreakDoc = db.collection('users').doc(user.uid);

        userStreakDoc.get().then(doc => {
            if (doc.exists) {
                const currentStreak = doc.data().streakCount || 0;
                const newStreak = currentStreak + 1;

                // Update streak in Firestore
                userStreakDoc.update({
                    streakCount: newStreak
                }).then(() => {
                    document.getElementById('streakCount').innerText = newStreak;
                    document.getElementById('congratsMessage').style.display = 'block';
                });
            }
        });
    }
}
