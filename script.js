document.getElementById('yes-button').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const greeting = document.getElementById('greeting');
    
    greeting.style.display = 'none'; // Скрыть приветствие
    envelope.style.display = 'flex'; // Показать конверт

    // Показать письмо через небольшой промежуток времени для эффекта
    setTimeout(() => {
        document.getElementById('letter').style.display = 'block';
    }, 1000); // Задержка 1 секунда для эффекта открытия
});

document.getElementById('no-button').addEventListener('click', function() {
    alert('Нет, ответ не принят, попробуйте заново :)');
});
