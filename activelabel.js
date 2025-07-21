document.body.addEventListener("change", function(e) {
  if (e.target.matches(".form-input-element")) {
    const label = e.target.closest("label");
    const span = label?.querySelector("span");

    if (span) {
      if (e.target.value) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    }
  }
});

document.body.addEventListener("focusin", function(e) {
  if (e.target.matches(".form-input-element")) {
    const label = e.target.closest("label");
    const span = label?.querySelector("span");
    span?.classList.add("active");
  }
});

document.body.addEventListener("focusout", function(e) {
  if (e.target.matches(".form-input-element") && !e.target.value) {
    const label = e.target.closest("label");
    const span = label?.querySelector("span");
    span?.classList.remove("active");
  }
});

document.querySelectorAll('.submit-button').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('span').forEach(span => {
      span.classList.remove('active');
    });
  });
});
//document.body.addEventListener('click', function() {
//});
