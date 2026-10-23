class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  availableToBuy() {
    console.log(`${this.name}, ${this.author}`);
  }
}

class RareBook extends Book {
  constructor(name, author, isRare) {
    super(name, author);
    this.isRare = isRare;
  }

  availableToRead() {
    console.log(`Редкое издание ${this.name}, ${this.author} ${this.isRare}`);
  }
}

const harryPotter = new Book("Гарри Поттер и философский камень", "Дж. Роулинг");
harryPotter.availableToBuy();

const gutenbergBible = new RareBook("Библия Гутенберга", "И. Гутенберг", "Редкая (15 век)");
gutenbergBible.availableToRead();