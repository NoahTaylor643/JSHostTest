
window.onload = function () {

  document.querySelectorAll('.form-field-label').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('span test');
      element.classList.add('active');
    });
  });  
};
