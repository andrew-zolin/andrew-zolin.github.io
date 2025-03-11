// Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Menu elements
    const navToggler = document.querySelector('.mobile-nav-toggler');
    const extendedMenu = document.querySelector('.extended-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.extended-menu-nav li a');
    const desktopMenu = document.querySelector('.menuzord-menu');
    
    // Check viewport and adjust menu visibility
    function checkViewport() {
        const isMobile = window.innerWidth <= 991;
        
        if (isMobile) {
            // Mobile view
            if (desktopMenu) desktopMenu.style.display = 'none';
            if (navToggler) navToggler.style.display = 'flex';
        } else {
            // Desktop view
            if (desktopMenu) desktopMenu.style.display = 'flex';
            if (navToggler) navToggler.style.display = 'none';
            // Close mobile menu if open
            if (extendedMenu && extendedMenu.classList.contains('visible')) {
                closeMenu();
            }
        }
    }
    
    // Open mobile menu
    function openMenu() {
        document.body.classList.add('menu-open');
        extendedMenu.classList.add('visible');
        extendedMenu.style.visibility = 'visible';
        extendedMenu.style.right = '0';
        
        // Add backdrop
        document.body.insertAdjacentHTML('beforeend', '<div class="menu-backdrop"></div>');
        setTimeout(() => {
            document.querySelector('.menu-backdrop').style.opacity = '1';
        }, 10);
    }
    
    // Close mobile menu
    function closeMenu() {
        document.body.classList.remove('menu-open');
        extendedMenu.classList.remove('visible');
        extendedMenu.style.right = '-100%';
        
        // Remove backdrop
        const backdrop = document.querySelector('.menu-backdrop');
        if (backdrop) {
            backdrop.style.opacity = '0';
            setTimeout(() => backdrop.remove(), 300);
        }
        
        setTimeout(() => {
            extendedMenu.style.visibility = 'hidden';
        }, 400);
    }
    
    // Toggle mobile menu
    if (navToggler) {
        navToggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (extendedMenu.classList.contains('visible')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Close menu when clicking close button
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking menu items
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && extendedMenu.classList.contains('visible')) {
            closeMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (extendedMenu.classList.contains('visible') && 
            !extendedMenu.contains(e.target) && 
            !navToggler.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Set active menu item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.menuzord-menu li, .extended-menu-nav li');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Initial viewport check
    checkViewport();
    
    // Handle window resize
    window.addEventListener('resize', checkViewport);
}); 