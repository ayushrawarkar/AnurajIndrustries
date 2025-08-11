// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
    this.classList.toggle('active');
});

// Dropdown toggle for mobile
const dropdowns = document.querySelectorAll('.dropdown > a');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});

// Highlight current page in navigation
const currentPage = location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    if (currentPage === linkPage || 
        (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
    
    // Handle hash links
    if (linkPage.includes('#') && location.href.includes(linkPage)) {
        link.classList.add('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.querySelector('.main-nav').classList.remove('active');
            document.querySelector('.mobile-menu-toggle').classList.remove('active');
        }
    });
});

// Smooth page transitions
document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])').forEach(link => {
    if (link.href && link.href !== '#' && !link.href.includes('javascript')) {
        link.addEventListener('click', function(e) {
            if (this.href !== window.location.href) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    }
});

// Initialize page transition on load
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});