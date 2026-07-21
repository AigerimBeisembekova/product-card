
// 2. Перекрашивание ПЕРВОЙ карточки

const firstCard = document.querySelector('.products__item');
const changeFirstCardBtn = document.querySelector('#change-first-card-btn');

changeFirstCardBtn.addEventListener('click', () => {
    firstCard.style.backgroundColor = '#e8f5e9'; // Легкий зеленый
});


// 3. Перекрашивание ВСЕХ карточек

const allCards = document.querySelectorAll('.products__item');
const changeAllCardsBtn = document.querySelector('#change-all-cards-btn');

changeAllCardsBtn.addEventListener('click', () => {
    const greenColorHash = '#00FF00';
    allCards.forEach((card) => {
        card.style.backgroundColor = greenColorHash;
    });
});


// 4. Открытие Google при нажатии на кнопку

const openGoogleBtn = document.querySelector('#open-google-btn');

openGoogleBtn.addEventListener('click', openGoogleInNewTab);

function openGoogleInNewTab() {
    const newTab = confirm("Вы хотите открыть Google в новой вкладке?");

    if (newTab === true) {
        window.open('https://www.google.com');
    } else {
        return; // Пользователь отменил действие
    }
}


// 5. Вывод в console.log и alert

const showAlertBtn = document.querySelector('#show-alert-btn');

showAlertBtn.addEventListener('click', function() {
    logAndAlert('ДЗ №6');
});

function logAndAlert(message) {
    console.log(message);
    alert(message);
}



// 6. Вывод заголовка при наведении (mouseover)

const mainTitle = document.querySelector('.title.catalog__title');

mainTitle.addEventListener('mouseover', function() {
    logElementText(mainTitle);
});

function logElementText(element) {
    console.log(element.textContent.trim());
}



// 7. Переключение цвета кнопки через classList.toggle

const toggleColorBtn = document.querySelector('#toggle-color-btn');

toggleColorBtn.addEventListener('click', () => {
  // Нажали 1 раз — добавился 'purple-state' (кнопка фиолетовая)
  // Нажали 2 раз — удалился 'purple-state' (кнопка снова зелёная)
  toggleColorBtn.classList.toggle('purple-state');
});