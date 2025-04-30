if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  document.querySelectorAll('.form-input-element').forEach(function(el) {
    const label = el.closest('label');
    const span = label.querySelector('span');

    if (el.value) {
      span.classList.add('active');
    }

    el.addEventListener('focus', () => {
      span.classList.add('active');
    });

    el.addEventListener('blur', () => {
      if (!el.value) {
        span.classList.remove('active');
      }
    });
  });
}



/*
window.onload = function () {
  document.querySelectorAll('.form-input-element').forEach(function(el) {
    const label = el.closest('label');
    const span = label.querySelector('span');

    if (el.value) {
        span.classList.add('active');
    }
    
    el.addEventListener('focus', () => {
      span.classList.add('active');
    });

    el.addEventListener('blur', () => {
      if (!el.value) {
        span.classList.remove('active');
      }
    });
  });  
};
*/
