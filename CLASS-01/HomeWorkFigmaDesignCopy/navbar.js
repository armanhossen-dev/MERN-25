// Close menu when clicking on overlay
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar-active').checked = false;
});

// Close menu when clicking on a menu item (for better UX)
document.querySelectorAll('.menuUL a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar-active').checked = false;
    });
});

// Handle hamburger to X transformation
const checkbox = document.getElementById('sidebar-active');
const hamburgerIcon = document.querySelector('.open-sidebar-button i');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        hamburgerIcon.className = 'fa-solid fa-xmark';
    } else {
        hamburgerIcon.className = 'fa-solid fa-bars';
    }
});

