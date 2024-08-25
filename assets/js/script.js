// Dropdown for genre-list
const dropdownBtnGenre = document.getElementById("drop-text-genre");
const spanGenre = document.getElementById("span-genre");
const iconGenre = document.getElementById("icon-genre");
const genreList = document.getElementById("genre-list");
const genreListItems = document.querySelectorAll(".genre-list-item");

dropdownBtnGenre.onclick = function () {
    if (genreList.classList.contains("show")) {
        iconGenre.style.rotate = "0deg";
    } else {
        iconGenre.style.rotate = "-180deg";
    }
    genreList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-genre" &&
        e.target.id !== "span-genre" &&
        e.target.id !== "icon-genre"
    ) {
        genreList.classList.remove("show");
        iconGenre.style.rotate = "0deg";
    }
}

for (itemGenre of genreListItems) {
    itemGenre.onclick = function (e) {
        spanGenre.innerText = e.target.innerText;
    }
}

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

// Dropdown for sidebar genre-list
const dropdownBtnGenreSidebar = document.getElementById("drop-text-genre-sidebar");
const spanGenreSidebar = document.getElementById("span-genre-sidebar");
const iconGenreSidebar = document.getElementById("icon-genre-sidebar");
const genreListSidebar = document.getElementById("genre-list-sidebar");
const genreListItemsSidebar = document.querySelectorAll("#genre-list-sidebar .genre-list-item");

dropdownBtnGenreSidebar.onclick = function () {
    if (genreListSidebar.classList.contains("show")) {
        iconGenreSidebar.style.rotate = "0deg";
    } else {
        iconGenreSidebar.style.rotate = "-180deg";
    }
    genreListSidebar.classList.toggle("show");
}

for (itemGenreSidebar of genreListItemsSidebar) {
    itemGenreSidebar.onclick = function (e) {
        spanGenreSidebar.innerText = e.target.innerText;
        genreListSidebar.classList.remove("show");
        iconGenreSidebar.style.rotate = "0deg";
    }
}

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
