// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Get Started" button and add a click event listener
    const getStartedButton = document.getElementById("getStartedButton");
  
    getStartedButton.addEventListener("click", function () {
      // Redirect to another page
      window.location.href = "your-next-page.html";
    });
  });