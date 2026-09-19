const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const greeting = document.querySelector('#greeting');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = usernameInput.value.trim();

	if (!username) {
		greeting.textContent = 'Digite seu nome para continuar.';
		usernameInput.focus();
		return;
	}

	greeting.textContent = `Olá, ${username}!`;
	loginForm.reset();
});
