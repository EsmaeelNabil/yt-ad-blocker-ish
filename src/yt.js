console.log("crazy stuff! has been loaded!")

function refreshPageOnClass() {
    const elementsToWatch = document.getElementsByClassName('ytp-ad-player-overlay-instream-info');
    if (elementsToWatch.length > 0) {
      window.location.reload(); // Refresh the page
    }
  }
  
  // Call the function initially to check on page load
  refreshPageOnClass();
  
  // Use an interval to check periodically
  setInterval(refreshPageOnClass, 100); // Check every 5 seconds 

