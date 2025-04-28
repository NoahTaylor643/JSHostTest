document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.form-field-label').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('Label clicked:', event.target);
      element.classList.add('active');
    });
  });  

});
