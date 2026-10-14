document.getElementById('year').textContent = new Date().getFullYear();

const greetBtn = document.getElementById('greet-btn');
const greetOutput = document.getElementById('greet-output');

greetBtn.addEventListener('click', () => {
  greetOutput.textContent = 'Hello there! 👋';
});
