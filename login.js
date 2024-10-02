document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase Sign In with Email and Password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            alert('Login successful!');
            // Redirect to home or dashboard page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
});

// Sign Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Firebase Sign Up with Email and Password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            alert('Sign up successful!');
            // Redirect to home or dashboard page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            alert('Sign up failed: ' + error.message);
        });
});

// Google Sign In
document.getElementById('googleSignInBtn').addEventListener('click', function () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Google sign-in successful!');
            // Redirect to home or dashboard page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            alert('Google sign-in failed: ' + error.message);
        });
});

// Toggle between Login and Sign Up
document.getElementById('signUpLink').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function () {
    document.getElementById('signUpContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});