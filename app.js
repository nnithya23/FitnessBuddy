// Motivational Quotes Array
const motivationalQuotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "The only bad workout is the one that didn’t happen.",
    "Believe in yourself and all that you are.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Great things never come from comfort zones.",
    "The body achieves what the mind believes.",
    "If it doesn’t challenge you, it doesn’t change you.",
    "Your only limit is you.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Wake up with determination. Go to bed with satisfaction.",
    "No pain, no gain. Shut up and train.",
    "Don’t wish for it, work for it.",
    "Fall in love with taking care of your body.",
    "Your health is an investment, not an expense.",
    "Train like a beast, look like a beauty.",
    "You’re one workout away from a good mood.",
    "Sore today, strong tomorrow.",
    "Sweat is just fat crying."
];

// Function to display a random motivational quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById("motivationalQuote").textContent = motivationalQuotes[randomIndex];
}

// Load a random quote when the page loads
window.onload = displayRandomQuote;

// Go to the next page when "Let's Go" button is clicked
function goToNextPage() {
    window.location.href = "profile.html"; // Change this to the next page URL
}

