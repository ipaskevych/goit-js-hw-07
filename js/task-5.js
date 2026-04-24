function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// 1. Находим элементы: кнопку и спан, куда будем записывать значение цвета
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

// 2. Добавляем слушатель события 'click' на кнопку
changeColorBtn.addEventListener('click', () => {
  // Генерируем новый случайный цвет
  const newColor = getRandomHexColor();

  // 3. Устанавливаем цвет фона для body
  body.style.backgroundColor = newColor;

  // 4. Записываем значение цвета в текстовый контент спана
  colorSpan.textContent = newColor;
});