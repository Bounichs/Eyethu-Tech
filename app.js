const menu = document.querySelector('mobile-menu'); 
const navbarmenu = document.querySelector('navbar__menu'); 

menu.onclick = function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}


// Hide mobile menu when clicking on a link
const menuLinks = document.querySelectorAll('.dropdown-menu');
function toggleMobileMenuIcon() {
    if (!menuLinks) return;
    if (window.innerWidth > 768) { // Adjust 768px as your breakpoint
        menuLinks.classList.add('hide');
    } else {
        menuLinks.classList.remove('hide');
    }
}

// Run on load and on resize
window.addEventListener('resize', toggleMobileMenuIcon);
window.addEventListener('DOMContentLoaded', toggleMobileMenuIcon);