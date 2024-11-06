// Функция перехода между экранами
function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById(screenId).classList.add('active');
}

// Таймер для отображения времени с даты
const startDate = new Date('2024-09-06T00:00:00').getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = now - startDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}, 1000);
