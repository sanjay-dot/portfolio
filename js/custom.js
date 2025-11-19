$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'scrollingSpeed': 600,
        'autoScrolling': false,
        'fitToSection': false,        // ADD THIS
        'fitToSectionDelay': 0,       // ADD THIS
        'css3': true,
        'navigation': false,           // DISABLE THIS (at least for testing)
        'navigationPosition': 'right',
    });
});

// wow
$(function() {
    new WOW().init();
    $(".rotate").textrotator();
});