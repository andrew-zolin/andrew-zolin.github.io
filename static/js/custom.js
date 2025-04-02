// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animate.css elements
    const animateElements = document.querySelectorAll('.animate__animated');
    animateElements.forEach(element => {
        element.classList.add('animate__animated');
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Count up animation for stats
    const countElements = document.querySelectorAll('.count-up');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                const increment = Math.ceil(count / 50);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= count) {
                        clearInterval(timer);
                        current = count;
                    }
                    target.textContent = current;
                }, 30);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    countElements.forEach(element => {
        statsObserver.observe(element);
    });
    
    // Sticky header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Testimonial slider functionality
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (track && dots.length && cards.length) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active dot
                document.querySelector('.dot.active').classList.remove('active');
                dot.classList.add('active');
                
                // Scroll to the corresponding testimonial
                const cardWidth = cards[0].offsetWidth;
                const gap = 30; // Same as the gap in CSS
                track.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: 'smooth'
                });
            });
        });
        
        // Update active dot on scroll
        track.addEventListener('scroll', () => {
            const cardWidth = cards[0].offsetWidth;
            const gap = 30;
            const scrollPosition = track.scrollLeft;
            const index = Math.round(scrollPosition / (cardWidth + gap));
            
            if (index >= 0 && index < dots.length) {
                document.querySelector('.dot.active').classList.remove('active');
                dots[index].classList.add('active');
            }
        });
    }

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const overlay = document.querySelector('.overlay');
    
    // Toggle mobile menu function
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        mobileMenuToggle.classList.toggle('active');
    }
    
    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on a link
    if (mobileNavLinks.length) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });
    }
    
    // Close menu on resize if screen becomes larger
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});