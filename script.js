$(document).ready(function(){

    // Smooth scrolling for navigation links
    $('.navbar-nav .nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Handle Contact Form Submission
    $('#contactForm').on('submit', function(event) {
        // Prevent the default form submission which reloads the page
        event.preventDefault(); 

        // Get the values from the form fields
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        // Simple validation check
        if(name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Display a confirmation message (for demonstration)
        alert('Thank you, ' + name + '! Your message has been received.');

        // Clear the form fields after submission
        $('#contactForm')[0].reset();
    });

});