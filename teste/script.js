const nameForm = document.querySelector('#name-form');
const nameInput = document.querySelector('#user-name');
const nameView = document.querySelector('#name-view');
const greetingView = document.querySelector('#greeting-view');
const greetingName = document.querySelector('#greeting-name');
const changeNameButton = document.querySelector('#change-name');

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }

  greetingName.textContent = name;
  nameView.hidden = true;
  greetingView.hidden = false;
  changeNameButton.focus();
});

changeNameButton.addEventListener('click', () => {
  greetingView.hidden = true;
  nameView.hidden = false;
  nameInput.focus();
});