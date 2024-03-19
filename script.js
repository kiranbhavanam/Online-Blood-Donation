document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const bloodRequestForm = document.getElementById('blood-request-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your registration form submission logic here
        console.log('Register button clicked');
    });

    bloodRequestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your blood request form submission logic here
        console.log('Request Blood button clicked');
    });
});
