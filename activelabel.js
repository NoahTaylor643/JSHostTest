
window.onload = function () {

  document.querySelectorAll('.form-field-label').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('span test');
      element.classList.add('active');
    });
  });  

  
  document.querySelectorAll('.form-input-wrapper-div').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('Div Test');
      element.classList.add('active');
    });
  }); 

  document.querySelectorAll('.form-input-element').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('input Test');
      element.classList.add('active');
    });
  }); 
  
  document.querySelectorAll('.form-input-wrapper-element').forEach(function(element) {
    element.addEventListener('click', function(event) {
      console.log('label Test');
      element.classList.add('active');
    });
  }); 
};
