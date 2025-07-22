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
  } else if (e.target.matches(".submit-button")) {
    const spans = document.querySelectorAll('span.global-input-label.active');
    spans.forEach(span => {
      span?.classList.remove("active");
    });
  }
});
