let lastScrollTop = 0; // Variable to store the last scroll position
const navbar = document.getElementById("navbar"); // Get the navbar element

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-60px"; // Hide the navbar (adjust based on navbar height)
    } else {
        // Scrolling up
        if (scrollTop === 0) {
            // Only show the navbar if at the top of the page
            navbar.style.top = "0"; // Show the navbar
        }
    }
    lastScrollTop = scrollTop; // Update last scroll position
});