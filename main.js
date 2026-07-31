const firstCard = document.querySelector(".products__item");
const changeFirstCardBtn = document.querySelector("#change-first-card-btn");

changeFirstCardBtn.addEventListener("click", () => {
  firstCard.style.backgroundColor = "#e8f5e9"; // Легкий зеленый
});

const allCards = document.querySelectorAll(".products__item");
const changeAllCardsBtn = document.querySelector("#change-all-cards-btn");

changeAllCardsBtn.addEventListener("click", () => {
  const greenColorHash = "#00FF00";
  allCards.forEach((card) => {
    card.style.backgroundColor = greenColorHash;
  });
});

const openGoogleBtn = document.querySelector("#open-google-btn");

openGoogleBtn.addEventListener("click", openGoogleInNewTab);

function openGoogleInNewTab() {
  const newTab = confirm("Вы хотите открыть Google в новой вкладке?");

  if (newTab === true) {
    window.open("https://www.google.com");
  }
}

const showAlertBtn = document.querySelector("#show-alert-btn");

showAlertBtn.addEventListener("click", function () {
  logAndAlert("ДЗ №6");
});

function logAndAlert(message) {
  console.log(message);
  alert(message);
}

const mainTitle = document.querySelector(".title.catalog__title");

mainTitle.addEventListener("mouseover", function () {
  logElementText(mainTitle);
});

function logElementText(element) {
  console.log(element.textContent.trim());
}

const toggleColorBtn = document.querySelector("#toggle-color-btn");

toggleColorBtn.addEventListener("click", () => {
  // Нажали 1 раз — добавился 'purple-state' (кнопка фиолетовая)
  // Нажали 2 раз — удалился 'purple-state' (кнопка снова зелёная)
  toggleColorBtn.classList.toggle("purple-state");
});
