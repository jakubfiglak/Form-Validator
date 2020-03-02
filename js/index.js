const signupInputs = document.querySelectorAll('.signup__input');

function displayError(input, message) {
  const field = input.closest('.signup__field');
  const errorMsg = field.querySelector('.signup__error');
  errorMsg.innerText = `${message}`;
  errorMsg.classList.add('signup__error--active');
  input.classList.add('signup__input--invalid');
}

function validateInputs() {
  const { valueMissing, typeMismatch, tooShort } = this.validity;

  if (valueMissing) {
    displayError(this, 'This field is required');
  }
  if (typeMismatch) {
    displayError(this, 'Please enter a valid e-mail');
  }
  if (tooShort) {
    displayError(
      this,
      `${this.name} should be at least ${this.minLength} chars long`
    );
  }
}

signupInputs.forEach(input =>
  input.addEventListener('invalid', validateInputs)
);
