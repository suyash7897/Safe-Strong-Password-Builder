const generateBtn = document.getElementById('generate-btn');
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');

generateBtn.addEventListener('click', function() {
  const passwordLength = lengthInput.value;
  passwordInput.value = generatePassword(passwordLength);
});

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
const copyBtn = document.getElementById('copy-btn');


document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');

    // Update the span with the initial value
    lengthValue.textContent = rangeInput.value;

    // Add an event listener to update the span when the range input changes
    rangeInput.addEventListener('input', function() {
        lengthValue.textContent = rangeInput.value;
    });
});
copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(passwordInput.value)
    .then(() => alert('Password copied to clipboard!'))
    .catch(err => console.log('Failed to copy password: ', err));
});
document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const togglePasswordIcon = togglePasswordButton.querySelector('i');

    // Update the span with the initial value
    lengthValue.textContent = rangeInput.value;

    // Add an event listener to update the span when the range input changes
    rangeInput.addEventListener('input', function() {
        lengthValue.textContent = rangeInput.value;
    });

    // Add an event listener to toggle the password visibility
    togglePasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        }
    });
});