// Function to toggle menu list on mobile and show hamburger menu icon
// on resolution below 1024px 
//1. .nav-desktop display: none;
//2. .nav-mobile display: block;

function toggleNavigation() {
    const navDesktop = document.querySelector('.nav-desktop');
    const navMobile = document.querySelector('.nav-mobile');

    if (window.innerWidth <= 1024) {
        navDesktop.style.display = 'none';
        navMobile.style.display = 'block';
    } else {
        navDesktop.style.display = 'block';
        navMobile.style.display = 'none';
    }
}

// Run on page load
toggleNavigation();

// Run on window resize
window.addEventListener('resize', toggleNavigation);


// Function to show menu list on mobile(whole screen except visible header) after clicking on hamburger menu icon and hiding it after clicking either on: menu item or hamburger icon. Also switches hamburger icon to x icon.
//1. After click on hamburger menu icon, .menu-mobile display: block; & overflow: hidden;
//2. Switch hamburger icon to x icon
//3. After click on x icon or on menu item, .menu-mobile display: none;

document.addEventListener("DOMContentLoaded", function () {
    // Select elements from the DOM
    const menuMobile = document.querySelector('.menu-mobile');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menuItems = document.querySelectorAll('.menu-mobile ul li a');

    // Function to toggle the menu
    function toggleMenu() {
        // Toggle display of menu and icons
        if (menuMobile.style.display === 'flex') {
            menuMobile.style.display = 'none'; // Hide menu
            hamburgerIcon.style.display = 'block'; // Show hamburger icon
            closeIcon.style.display = 'none'; // Hide close icon
        } else {
            menuMobile.style.display = 'flex'; // Show menu
            hamburgerIcon.style.display = 'none'; // Hide hamburger icon
            closeIcon.style.display = 'block'; // Show close icon
        }
    }

    // Event listener for the hamburger icon to open the menu
    hamburgerIcon.addEventListener('click', toggleMenu);

    // Event listener for the close icon to close the menu
    closeIcon.addEventListener('click', toggleMenu);

    // Add event listeners to each menu item to close the menu when clicked
    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
});


