const subscribeForm = document.querySelector('.footer__subscribe-form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const emailInput = subscribeForm.querySelector('input')
  const userEmail = emailInput.value
  console.log({ email: userEmail })
  emailInput.value = ''
});


const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');


function openModal() {
    modal.classList.add('modal-showed');
    overlay.classList.add('modal-showed');
}

function closeModal() {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const registrationForm = document.querySelector('.modal__form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    alert('Registration rejected: Please fill out all required fields correctly.');
    return;
  }

  const userNameInput = registrationForm.querySelector('input[name="username"]');
  const userSurnameInput = registrationForm.querySelector('input[name="userSurname"]');
  const userDateOfBirthInput = registrationForm.querySelector('input[name="userDateOfBirth"]');
  const userLoginInput = registrationForm.querySelector('input[name="userLogin"]');
  const userPasswordInput = registrationForm.querySelector('input[name="userPassword"]');
  const userConfirmPasswordInput = registrationForm.querySelector('input[name="userConfirmPassword"]');

  const name = userNameInput.value;
  const surname = userSurnameInput.value;
  const dateOfBirth = userDateOfBirthInput.value;
  const login = userLoginInput.value;
  const password = userPasswordInput.value;
  const confirmPassword = userConfirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

const user = {
    name,
    surname,
    dateOfBirth,
    login,
    password,
    registrationDate: new Date()
};

console.log('User registered:', user);

registrationForm.reset();
  closeModal();
});
