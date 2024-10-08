// Hamburger menu functionality
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebarMenu = document.getElementById("sidebar-menu");
const sidebarClose = document.getElementById("sidebar-close");

hamburgerMenu.onclick = function () {
    sidebarMenu.classList.add("show");
}

sidebarClose.onclick = function () {
    sidebarMenu.classList.remove("show");
}

window.onclick = function (e) {
    if (
        e.target !== sidebarMenu &&
        !sidebarMenu.contains(e.target) &&
        !hamburgerMenu.contains(e.target)
    ) {
        sidebarMenu.classList.remove("show");
    }
}

// box shadow navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});

// login-register & darkmode
document.addEventListener('DOMContentLoaded', function() {
    const navUser = document.getElementById('nav-user');
    const navUserMenu = document.querySelector('.nav-user-menu');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const colorOptions = document.querySelectorAll('.color-option');

    // Event listener for nav-user click
    navUser.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        navUserMenu.style.display = navUserMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        console.log('Dark mode toggled');
    });

    // Click event for color options
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            if (this.classList.contains('white')) {
                document.body.classList.remove('dark-mode');
            } else {
                document.body.classList.add('dark-mode');
            }
        });
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!navUser.contains(event.target)) {
            navUserMenu.style.display = 'none';
        }
    });
});


// hero slider
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const navBullets = document.querySelectorAll(".nav-bullet");
let currentIndex = 0;
const transitionDuration = 5000; // Duration for each slide

// Initialize Hammer.js on the slider container
const hammer = new Hammer(sliderContainer);

// Function to show the slide based on the index
function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        navBullets[idx].classList.remove('active');
        if (idx === index) {
            slide.classList.add('active');
            navBullets[idx].classList.add('active');
        }
    });
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Handle swipe left event
hammer.on("swipeleft", nextSlide);

// Handle swipe right event
hammer.on("swiperight", prevSlide);

// Handle navigation bullet click event
navBullets.forEach((bullet, idx) => {
    bullet.onclick = function () {
        currentIndex = idx;
        showSlide(currentIndex);
    };
});

// Autoplay functionality
let autoplayInterval = setInterval(nextSlide, transitionDuration);

// Pause autoplay on user interaction
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, transitionDuration);
});



