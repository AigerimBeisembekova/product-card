import {products} from './products.js';


const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});


function renderProducts(itemsToRender) {
  const productsTemplate = document.querySelector("#products-template").content;
  const productsContainer = document.querySelector("#products-list");
  
  productsContainer.innerHTML = '';

  itemsToRender.forEach((product) => {
    const productClone = productsTemplate.cloneNode(true);

    productClone.querySelector(".product-image").src = product.imageUrl;
    productClone.querySelector(".product-image").alt = product.name;
    productClone.querySelector(".product-name").textContent = product.name;
    productClone.querySelector(".product-category").textContent = product.category;
    productClone.querySelector(".product-description").textContent = product.description;
    const compoundList = productClone.querySelector(".product-compound");
    compoundList.innerHTML = product.compound
        .map(item => `<li>${item}</li>`)
        .join('');
    productClone.querySelector(".product-price").textContent = `${product.price.toLocaleString('ru-RU')} ₽`;

    productsContainer.appendChild(productClone);
  });
}


function getCardsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);

  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Некорректный ввод! Показываем все 5 карточек.");
    return 5;
  }
}


const cardsCount = getCardsCount();
const selectedProducts = products.slice(0, cardsCount);
renderProducts(selectedProducts);