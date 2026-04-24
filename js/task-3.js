// 1. Находим элементы инпута и спана
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// 2. Добавляем слушатель события 'input'
nameInput.addEventListener('input', (event) => {
  // Забираем значение, очищая его от пробелов по бокам
  const trimmedValue = event.currentTarget.value.trim();

  // 3. Проверяем: если пусто, пишем Anonymous, если нет — введенное имя
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});