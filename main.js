document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  field.closest('.form-group').classList.toggle('has-error', Boolean(message));
  errorEl.textContent = message;
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById('name').value.trim();
  if (!name) {
    setFieldError('name', 'Please enter your name.');
    isValid = false;
  } else {
    setFieldError('name', '');
  }

  const email = document.getElementById('email').value.trim();
  if (!email) {
    setFieldError('email', 'Please enter your email.');
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setFieldError('email', 'Please enter a valid email address.');
    isValid = false;
  } else {
    setFieldError('email', '');
  }

  const message = document.getElementById('message').value.trim();
  if (!message) {
    setFieldError('message', 'Please enter a message.');
    isValid = false;
  } else {
    setFieldError('message', '');
  }

  return isValid;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccess.textContent = '';

  if (!validateForm()) {
    return;
  }

  formSuccess.textContent = "Thanks for reaching out! I'll get back to you soon.";
  contactForm.reset();
});
