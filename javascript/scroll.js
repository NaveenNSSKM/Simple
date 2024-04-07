window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Change opacity when scrolling down
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Reset opacity when at the top
    }
});