
$(document).ready(function() {
    // Mobile Menu Toggle
    $('.mobile-button').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-overlay').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('.group-button').toggleClass('active');
    });

    // Overlay Click Close
    $('.mobile-overlay').on('click', function() {
        $(this).removeClass('active');
        $('.mobile-button').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('.group-button').removeClass('active');
    });

    // Submenu Toggle
    $('.mobile-menu li.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).next('.sub-menu').slideToggle(300);
    });
});
