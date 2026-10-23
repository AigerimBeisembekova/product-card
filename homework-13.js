class Drink {
  #temperature
  constructor(name, size, price, temperature){
  this.name = name;
  this.size = size;
  this.price = price;
  this.#temperature = temperature;
  }
  
  getDrinkInfo(){
    return `напиток: ${this.name}, размер: ${this.size}, цена: ${this.price}`
  }

  getDrinkTemperature(){
    return this.#temperature;
  }

  setTemperature(newTemperature){
    this.#temperature = newTemperature;
  }

  #makeDrink(){
    console.log("Напиток готовится")
  }

  bringDrink(){
    this.#makeDrink();
    this.setTemperature(80);
    console.log(`Напиток ${this.name} подан клиенту`)
  }

}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType){
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, brewTime){
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.brewTime = brewTime;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, withIce){
    super(name, size, price, temperature);
    this.flavor = flavor;
    this.withIce = withIce;
  }
}


class Cafe {
  constructor(name, location){
    this.name = name;
    this.location = location;
  }

  getCafeInfo(){
    return `Кафе ${this.name} находится на ${this.location}`
  }

  orderDrink(drink){
    drink.bringDrink();
  }
}