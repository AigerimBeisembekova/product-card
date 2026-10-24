const userInfo = {
  name: "Aigerim",
  surname: "Beisembekova",
  age: 33,
  maritalStatus: "married",
  email: "aigerim.beisembekova@gmail.com",
  country: "Kazakhstan",
  city: "Almaty",
  position: "Frontend Developer",
  company: "NurTech"
};

const carInfo = {
  brand: "Toyota",
  model: "Rav4",
  year: 1997,
  color: "grey",
  engineType: "gasoline",
  transmission: "automatic",
  mileage: 50000,
  price: 4000000,
  maxSpeed: 180,
};

carInfo.owner = userInfo;

function checkMaxSpeed(carInfo) {
  if ('maxSpeed' in carInfo) {
    return;
    } else {carInfo.maxSpeed = 180;
    }
}

//checkMaxSpeed(carInfo);
//console.log(carInfo.maxSpeed);

function getPropertyValue(obj, key) {
    console.log(obj[key]);
}

//getPropertyValue(carInfo, "brand");
//getPropertyValue(carInfo, "model");
//getPropertyValue(carInfo, "year");
//getPropertyValue(carInfo, "color");


const groceryList = ["хлеб", "молоко", "сыр", "яблоки", "бананы", "апельсины", "помидоры", "огурцы", "картофель", "морковь"];


const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
    coverColor: "Green"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Novel",
    coverColor: "Blue"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1948,
    genre: "Dystopian Fiction",
    coverColor: "Red"
  }
];

books.push({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    coverColor: "Pink"
});

//console.log(books);


const harryPotterBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    coverColor: "Red"
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    genre: "Fantasy",
    coverColor: "Green"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    genre: "Fantasy",
    coverColor: "Blue"
  }
]

const AllBooks = [...books, ...harryPotterBooks];

//console.log(AllBooks);


function addRareProperty(booksList) {
    return booksList.map(book => {
        return{
        isRare: book.year > 1995
        };
    });
}

const rareBooks = addRareProperty(AllBooks);

//console.log(rareBooks);