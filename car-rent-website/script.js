let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu Open Close
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let closeMenu = document.querySelector('.close-menu');

// Function to close navbar
const closeNavbar = () => {
    navbar.classList.remove('active');
};

// Open menu
menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
});

// Close with X button
closeMenu.addEventListener('click', closeNavbar);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        closeNavbar();
    }
});

// Close menu when clicking on any nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent immediate navigation
        closeNavbar(); // Close the navbar
        
        // Get the href and navigate after transition
        const href = link.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 400); // Match the transition time from CSS
    });
});