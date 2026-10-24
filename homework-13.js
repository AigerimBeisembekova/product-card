class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создавать объекты этого класса напрямую");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return `напиток: ${this.name}, размер: ${this.size}, цена: ${this.price}`;
  }

  getDrinkTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #makeDrink() {
    console.log("Напиток готовится");
  }

  bringDrink(temperature) {
    this.#makeDrink();
    this.setTemperature(temperature);
    console.log(`Напиток ${this.name} подан клиенту`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, зерно: ${this.beansType}, молоко: ${this.milkType}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, brewTime) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.brewTime = brewTime;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, вид: ${this.teaType}, время заваривания: ${this.brewTime}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, withIce) {
    super(name, size, price, temperature);
    this.flavor = flavor;
    this.withIce = withIce;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, вкус: ${this.flavor}, со льдом: ${this.withIce}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе ${this.name} находится на ${this.location}`;
  }

  orderDrink(drink) {
    drink.bringDrink(drink.getDrinkTemperature());
  }
}

// const testAbstract = new Drink("drink", "250ml", 500, 60);
const favoriteCafe = new Cafe("Eva coffee", "Auezov str 65, 1st floor");
console.log(favoriteCafe.getCafeInfo());

const latte = new Coffee("latte", "200 ml", 2000, 70, "Arabica", "coconut");
console.log(latte.getDrinkInfo());

const jasmineTea = new Tea("jasmine tea", "500 ml", 1800, 80, "green", 5);
console.log(jasmineTea.getDrinkInfo());

const coldLemonade = new Lemonade("Citrus", "400 ml", 1500, 20, "lemon", true);
console.log(coldLemonade.getDrinkInfo());

favoriteCafe.orderDrink(latte);
console.log(jasmineTea.getDrinkTemperature());
coldLemonade.setTemperature(25);
console.log(coldLemonade.getDrinkTemperature());
