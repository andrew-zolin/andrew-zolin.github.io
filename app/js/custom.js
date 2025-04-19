// Notification Banner Management
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('notification-banner');
    const closeBtn = document.getElementById('notification-close');
    const body = document.body;

    // Check if the banner was previously closed
    const isBannerClosed = localStorage.getItem('notificationBannerClosed');

    if (isBannerClosed) {
        banner.style.display = 'none';
    } else {
        body.classList.add('has-notification');
    }

    closeBtn.addEventListener('click', function() {
        banner.style.height = banner.offsetHeight + 'px';
        banner.offsetHeight; // Force reflow
        banner.style.height = '0';
        banner.style.padding = '0';
        banner.style.overflow = 'hidden';
        
        setTimeout(() => {
            banner.style.display = 'none';
            body.classList.remove('has-notification');
        }, 300);

        // Save the state
        localStorage.setItem('notificationBannerClosed', 'true');
    });
});

// Number animation function
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize number animations when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const endValue = parseInt(element.textContent);
                animateValue(element, 0, endValue, 2000); // 2000ms duration
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    statNumbers.forEach(number => {
        observer.observe(number);
    });
});




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