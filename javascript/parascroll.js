// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the fade-in effect
  function handleFadeIn() {
    var content = document.getElementById('contenthead');
    if (isInViewport(content)) {
      content.classList.add('show');
      window.removeEventListener('scroll', handleFadeIn);
    }
  }
  
  // Listen for scroll events to trigger the fade-in effect
  window.addEventListener('scroll', handleFadeIn);
  