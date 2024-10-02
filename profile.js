// Firestore reference
const db = firebase.firestore();

// Profile Form Submission
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const target = document.getElementById('target').value;
    const workoutType = document.getElementById('workoutType').value;

    // Validate that all fields are filled
    if (name && age && weight && target && workoutType) {
        // Store data in Firestore
        db.collection('users').add({
            name: name,
            age: age,
            weight: weight,
            target: target,
            workoutType: workoutType,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            alert('Profile created successfully!');
            // Redirect to the next page (e.g., video suggestion page)
            function goToNextPage(){
            window.location.href = 'home.html';
    }})
        .catch((error) => {
            console.error('Error adding document: ', error);
            alert('Error creating profile. Please try again.');
        });
    } else {
        alert('Please fill all the fields');
    }
});
