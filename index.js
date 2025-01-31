// Function to display current time in UTC
function displayCurrentTime() {
  const utcTimeElement = document.getElementById("time");
  const currentTime = new Date().toUTCString();
  utcTimeElement.textContent = `Current Time (UTC): ${currentTime}`;
}

// Call the function to display current time when page loads
window.onload = displayCurrentTime;
