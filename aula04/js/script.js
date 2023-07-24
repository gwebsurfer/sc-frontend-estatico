const submitButton = document.getElementById('btn-submit');

submitButton.addEventListener('click', () => {
  if (
    submitButton.getAttribute('aria-label') === 'Button for form submission'
  ) {
    submitButton.setAttribute('aria-label', 'Button for form resubmission');
  }
});
