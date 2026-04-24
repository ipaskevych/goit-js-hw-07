// 1. Находим список всех категорий (элементы li с классом item)
const categoriesItems = document.querySelectorAll('#categories .item');

// Выводим общее количество категорий
console.log(`Number of categories: ${categoriesItems.length}`);

// 2. Перебираем каждую категорию с помощью forEach
categoriesItems.forEach(item => {
  // Находим заголовок <h2> внутри текущей категории
  const categoryName = item.querySelector('h2').textContent;
  
  // Находим все <li> внутри текущей категории и считаем их количество
  const elementsCount = item.querySelectorAll('ul li').length;

  // Выводим результат в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});