// content.js

// Function to remove the specific HTML element
function removeElement() {
    const element = document.querySelector('tp-yt-paper-dialog[style-target="host"]');
    if (element) {
      element.remove();
    }
  }
  
  // Call the removeElement function when the page loads
  removeElement();
  
  // Add an observer to remove the element if it's added dynamically
  const observer = new MutationObserver(() => {
    removeElement();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  