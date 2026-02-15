// Mobile Navigation & Hamburger Menu

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
    } else {
        menu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            const hamburger = document.querySelector('.hamburger');
            
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
