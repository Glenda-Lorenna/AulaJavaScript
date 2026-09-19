const progress = document.querySelector('#progress');
const percentage = document.querySelector('#percentage');
const status = document.querySelector('#status');
const cores = document.querySelector('#cores');
const measureButton = document.querySelector('#measure-button');

cores.textContent = `Núcleos lógicos detectados: ${navigator.hardwareConcurrency || 'não informado'}`;

function measureCpu() {
	measureButton.disabled = true;
	status.textContent = 'Processando...';

	const start = performance.now();
	const duration = 500;
	let operations = 0;
	let result = 0;

	while (performance.now() - start < duration) {
		result += Math.sqrt(operations % 1000);
		operations += 1;
	}

	const operationsPerSecond = operations * (1000 / duration);
	const estimatedPercentage = Math.min(100, Math.max(1, Math.round(operationsPerSecond / 100000)));

	percentage.textContent = `${estimatedPercentage}%`;
	progress.style.width = `${estimatedPercentage}%`;
	status.textContent = `Desempenho estimado: ${operations.toLocaleString('pt-BR')} operações em 0,5 segundo.`;
	measureButton.disabled = false;

	// Mantém o resultado do cálculo para o navegador não eliminar o processamento.
	window.cpuResult = result;
}

measureButton.addEventListener('click', measureCpu);
measureCpu();
