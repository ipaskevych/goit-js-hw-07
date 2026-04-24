// 1. Находим форму
const loginForm = document.querySelector('.login-form');

// 2. Вешаем слушатель события 'submit'
loginForm.addEventListener('submit', (event) => {
  // Отменяем перезагрузку страницы
  event.preventDefault();

  // Достаем элементы формы через свойство elements
  const { email, password } = event.currentTarget.elements;

  // 3. Проверяем на пустые поля (используем trim())
  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('All form fields must be filled in');
  }

  // 4. Собираем данные в объект, если всё заполнено
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  // 5. Выводим результат в консоль
  console.log(formData);

  // 6. Очищаем поля формы
  event.currentTarget.reset();
});
