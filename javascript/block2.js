// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    var image = document.querySelector('.animated-image');

    if (isElementInViewport(image)) {
        image.parentElement.classList.add('show');
        window.removeEventListener('scroll', handleScroll);
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
