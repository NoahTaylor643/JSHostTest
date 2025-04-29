
window.onload = function () {

  document.querySelectorAll('.form-field-label').forEach(function(el) {

    el.addEventListener('focus', () => {
      el.classList.add('active');
    });

    el.addEventListener('blur', () => {
      if (!el.value) {
        el.classList.remove('active');
      }
    });
  });  
};
