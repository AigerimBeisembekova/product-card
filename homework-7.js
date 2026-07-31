function shoeWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
shoeWeather('Алматы', 35);


const LIGHT_SPEED = 299792458;
function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость")
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость")
    } else {
        if (speed === LIGHT_SPEED) {
            console.log("Скорость света")
        }
    }
}
checkSpeed(400000000);
checkSpeed(3000);
checkSpeed(299792458);


const product = "Букет";
const price = 2500;

function buyProduct(budjet) {
    if (budjet >= price) {
        console.log(`${product} приобретен. Спасибо за покупку!`);
    }else {
        const difference = price - budjet;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}
buyProduct(3000);
buyProduct(2000);


function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Айгерим");
greetUser("Жансауле");


const userName = "Айгерим";

let userAge = 33;

const userCity = "Алматы";

function showUserInfo(name, age, city) {
    console.log(`Пользователь ${name}, возраст ${age} года, город ${city}`);
}
showUserInfo(userName, userAge, userCity);
