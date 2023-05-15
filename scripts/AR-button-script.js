document.addEventListener("DOMContentLoaded", function() {
    const arButton = document.getElementById('ar-button');
    const body = document.body;
    
    function toggleArTint() {
      body.classList.toggle('ar-tint');
    }
  
    arButton.addEventListener('click', toggleArTint);
  });