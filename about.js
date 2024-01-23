$(document).ready(function() {
    animateWelcomeText();
});

function animateWelcomeText() {
    $('#welcomeText').animate({ fontSize: '3em', opacity: 0.2 }, 'slow', function() {
        $(this).animate({ fontSize: '2em', opacity: 1 }, 'slow', function() {
            animateWelcomeText();
        });
    });
}