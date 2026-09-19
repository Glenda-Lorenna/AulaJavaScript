const clock = document.querySelector('#clock');
const timezone = document.querySelector('#timezone');
const statusMessage = document.querySelector('#status');

let serverTime;

function showTime() {
	if (!serverTime) {
		return;
	}

	const hours = String(serverTime.getHours()).padStart(2, '0');
	const minutes = String(serverTime.getMinutes()).padStart(2, '0');
	const seconds = String(serverTime.getSeconds()).padStart(2, '0');

	clock.textContent = `${hours}:${minutes}:${seconds}`;
}

async function getPlanetTime() {
	try {
		const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const endpoint = `https://timeapi.io/api/Time/current/zone?timeZone=${encodeURIComponent(localTimezone)}`;
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw new Error('Não foi possível consultar o servidor.');
		}

		const data = await response.json();
		serverTime = new Date(data.dateTime);
		timezone.textContent = `Fuso horário: ${data.timeZone}`;
		statusMessage.textContent = 'Hora sincronizada pelo servidor.';
		showTime();
		setInterval(() => {
			serverTime.setSeconds(serverTime.getSeconds() + 1);
			showTime();
		}, 1000);
	} catch (error) {
		timezone.textContent = 'Não foi possível identificar o fuso horário.';
		statusMessage.textContent = 'Verifique sua conexão e tente novamente.';
	}
}

getPlanetTime();
