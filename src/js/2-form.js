const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};

const parseLSData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (parseLSData) {
  formData.email = parseLSData.email;
  formData.message = parseLSData.message;
  refs.form.elements.email.value = parseLSData.email ?? '';
  refs.form.elements.message.value = parseLSData.message ?? '';
}

refs.form.addEventListener('input', onUserInput);
refs.form.addEventListener('submit', onUserSubmit);

function onUserInput(e) {
  const emailInput = e.currentTarget.elements.email.value.trim();
  const messageInput = e.currentTarget.elements.message.value.trim();
  formData.email = emailInput;
  formData.message = messageInput;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onUserSubmit(e) {
  e.preventDefault();
  const emailInput = e.currentTarget.elements.email.value;
  const messageInput = e.currentTarget.elements.message.value;
  if (emailInput === '' || messageInput === '') {
    return alert(`Fill please all fields`);
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
  refs.form.reset();
}
