const throttle = require('lodash.throttle');

const inputMail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');

saidInput();

function saidInput() {
  const keyName = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (keyName) {
    inputMessage.value = keyName.message || '';
    inputMail.value = keyName.email || '';
  }
}

const storageData = (type, value) => {
  const storageAccessData = localStorage.getItem('feedback-form-state');
  const access = storageAccessData ? JSON.parse(storageAccessData) : {};
  console.log(type, value);
  access[type] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(access));
};

function onInputMail(e) {
  storageData('email', e.target.value);
}

function onInputMessage(e) {
  storageData('message', e.target.value);
}

function onButton(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}

inputMail.addEventListener('input', throttle(onInputMail, 500));
inputMessage.addEventListener('input', throttle(onInputMessage, 500));
form.addEventListener('submit', onButton);
