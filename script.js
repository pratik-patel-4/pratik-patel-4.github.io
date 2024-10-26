// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) { const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Add animation class to timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    window.addEventListener('scroll', function() {
        timelineItems.forEach(function(item) {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });
    });
});


// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// Scroll to top when clicked
document.getElementById('scroll-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Theme toggle functionality
/*  
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved user preference, if any, on load of the website
const darkThemePreference = localStorage.getItem('darkTheme');

// Function to set the theme
const setTheme = (isDark) => {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
};

// Initial theme setup
if (darkThemePreference === 'true') {
    setTheme(true);
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDarkTheme);
    localStorage.setItem('darkTheme', !isDarkTheme);
});*/

// updated 

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved user preference, if any, on load of the website
const darkThemePreference = localStorage.getItem('darkTheme');

// Function to set the theme
const setTheme = (isDark) => {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
};

// Initial theme setup - set dark theme if no preference is saved
if (darkThemePreference === null) {
    setTheme(true);
    localStorage.setItem('darkTheme', 'true');
} else {
    setTheme(darkThemePreference === 'true');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDarkTheme);
    localStorage.setItem('darkTheme', !isDarkTheme);
});