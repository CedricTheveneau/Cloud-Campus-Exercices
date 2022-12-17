/*console.log("Hello World !");

debugger;

console.log("Ceci est après le debugger !");*/

/*let firstName;

firstName = "Cédric";

const lastName = "Theveneau";

let myAge;

console.log(firstName);
console.log(lastName);
console.log(myAge);

myAge = "21";

console.log(myAge);
console.log(typeof myAge);

myAge = Number(myAge);

console.log(typeof myAge);

let myPseudo = "Cedros";

console.log("Bonjour " + myPseudo);*/

//Exo 1

/* let firstName = prompt("Veuillez entrer votre prénom");

let secondName = prompt("Veuillez entrer un autre prénom");

let myState = prompt("Veuillez entrer votre état actuel");

let secondState = prompt("Veuillez entrer un second état");

let anHour = prompt("Veuillez entrer l'heure qu'il est");

let aDay = prompt("Veuillez indiquer le jour que nous sommes");

console.log("This is the way we were asked to do it");

console.log(firstName + " : Bonjour !");
console.log(secondName + " : Bonjour " + firstName + "! Comment vas-tu ?");
console.log(firstName + " : " + myState + ", et toi ?");
console.log(secondName + " : " + secondState + ", je te remercie.");
console.log(firstName + " : Quelle heure est-il ?");
console.log(secondName + " : Il est " + anHour + " heures.");
console.log(firstName + " : D'acc, merci.");
console.log(secondName + " : Où manges-tu aujourd'hui ?");
console.log(firstName + " : Je rentre chez moi comme tous les " + aDay + "s");
console.log(secondName + " : D'acc.");

console.log("This is the other way to do it");

console.log(`${firstName} : Bonjour !`);
console.log(`${secondName} : Bonjour ${firstName}! Comment vas-tu ?`);
console.log(`${firstName} : ${myState}, et toi ?`);
console.log(`${secondName} : ${secondState}, je te remercie.`);
console.log(`${firstName} : Quelle heure est-il ?`);
console.log(`${secondName} : Il est ${anHour} heures.`);
console.log(`${firstName} : D'acc, merci.`);
console.log(`${secondName} : Où manges-tu aujourd'hui ?`);
console.log(`${firstName} : Je rentre chez moi comme tous les ${aDay}s`);
console.log(`${secondName} : D'acc.`); */

//Exo 2

/* let myAge = prompt("Veuillez renseigner votre âge");

if (myAge >= 18 && myAge < 21) {
  console.log("Hey ! Vous êtes majeur !");
} else if (myAge >= 21) {
  console.log("Hey ! Vous êtes majeur à l'internationnal !");
} else {
  console.log("Vous êtes mineur.");
} */

//Exo 3

/* let firstNumber = prompt("Veuillez entrer un premier nombre", "1");
let secondNumber = prompt("Veuillez entrer un second nombre", "2");
let thirdNumber = prompt("Veuillez entrer un troisième nombre", "3");

if (firstNumber == secondNumber && secondNumber == thirdNumber) {
  console.log("Les trois variables sont identiques.");
} else if (
  firstNumber == secondNumber ||
  firstNumber == thirdNumber ||
  secondNumber == thirdNumber
) {
  console.log("Deux des variables sont de valeurs identiques.");
} else {
  console.log("Les trois variables sont différentes.");
} */

//Exo 4

/*
let myNumber = prompt(
    "Veuillez renseigner un nombre compris entre 0 et 10",
    "5"
  );
  
  let index = 0;
  

  if (myNumber <= 10) {
    while (index <= myNumber && myNumber <= 10) {
        console.log(`${index} -> ${index * 2}`);
        index++;
      }
  } else {
    console.log("Vous êtes trop gourmand...");
  }
*/

//Exo 5

/* const myNumber = prompt("Rentrez un chiffre");

if (myNumber % 2 != 0) {
  for (index = 0; index <= myNumber; index++) {
    if (index % 2 != 0) {
      console.log(index + " impair");
    }
  }
} else {
  for (index = 0; index <= myNumber; index++) {
    if (index % 2 != 1) {
      console.log(index + " pair");
    }
  }
} */

//Exo 6

/* let pyramidFloors = prompt("Combien d'étages voulez-vous ?");

function pyramidBuild(pyramidFloors) {
  for (let i = 0; i <= pyramidFloors; i++) {
    console.log("#".repeat(i));
  }
}

pyramidBuild(pyramidFloors); */

//Exo 7

/* function checkBirthDate() {
  let todaysDate = new Date().toLocaleDateString();

  let birthDate = prompt(
    "Veuillez renseigner votre date de naissance.",
    "01/02/1999"
  );

  if (birthDate.substring(0, 5) == todaysDate.substring(0, 5)) {
    console.log(
      "Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !"
    );
  } else {
    console.log("En ce moment, une promotion de 15% sur tous les articles");
  }
}

checkBirthDate(); */

// Alternative

/* function happyBirthday(userBirthday) {
  const today = new Date().toLocaleDateString();
  console.log(today);
  console.log(userBirthday);
  console.log(userBirthday.substring(0, 5) === today.substring(0, 5));

  if (userBirthday.substring(0, 5) === today.substring(0, 5)) {
    return "Joyeux anniversaire! Tu obtiens une promotion de 30 % sur tous les articles!";
  } else {
    console.log("En ce moment, une promotion de 15% sur tous les articles");
  }
}

console.log(happyBirthday(`14/12/1999`)); */

//Exo 8

/* let choosenNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(choosenNumber) {
  if (choosenNumber == 0) {
    return 1;
  } else if (choosenNumber < 0) {
    return choosenNumber * fact(choosenNumber + 1);
  } else return choosenNumber * fact(-choosenNumber + 1);
}

console.log(`Le résultat est : ${fact(choosenNumber)}`); */

/* let num = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(num) {
  let result = 1;
  let absNum = Math.abs(num);

  for (let i = 1; i <= absNum; i++) {
    result *= i;
  }
  return num < 0 ? -result : result;
}

console.log(`Le résultat est : ${factorial(num)}`); */

//Exo 10
/*
// Tableau dogs
let dogs = ["Akita Inu", "Bouvier bernois", "Beagle"];
// Ajout de 2 éléments dans le tableau dogs
dogs.push("Golden Retriever", "Berger Allemand");
// Tri des éléments par ordre alphabétique
dogs.sort();
// Affichage du tableau dogs dans la console
console.log(dogs);
// Création d'un nouveau tableau d'objet à partir des éléments du tableau dogs
let newArray = [];
// Remplissage du newArray avec les chiens de dogs
function addCountry(dog) {
  let selectedCountry = prompt(`Veuillez sélectionner un pays pour ${dog}`);
  return selectedCountry;
}

for (let i = 0; i < dogs.length; i++) {
  let choosenCountry = addCountry(dogs[i]);
  let goodBoy = {
    name: dogs[i],
    nativeCountry: choosenCountry,
  };
  newArray.push(goodBoy);
}
console.log(newArray);
*/

//Exo 11

/* let user = {
  firstName: "Maaya",
  lastName: "Uchida",
  age: 33,
  fullName() {
    console.log(this.firstName, this.lastName);
  },
  isMajor() {
    if (this.age < 18) {
      console.log(false);
    } else {
      console.log(true);
    }
  },
};

console.log(user);
user.fullName();
console.log(user.age);
user.isMajor(); */

// Exo 12

/* const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];
console.log(entrepreneurs);

let inSeventies = [];

entrepreneurs.forEach((entrepreneurs) => {
  if (entrepreneurs.year > 1969 && entrepreneurs.year < 1980) {
    inSeventies.push(entrepreneurs);
  }
});

console.log(inSeventies);

entrepreneurs.forEach((entrepreneurs) => {
  console.log(entrepreneurs.first, entrepreneurs.last);
});

let thisDate = new Date();
let thisYear = thisDate.getFullYear();

entrepreneurs.forEach((entrepreneurs) => {
  let age = thisYear - entrepreneurs.year;
  entrepreneurs.age = age;
  console.log(
    entrepreneurs.first,
    entrepreneurs.last + ` aurait eu ` + entrepreneurs.age + ` ans aujourd'hui.`
  );
}); */

//Exo 13

/* const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

let rented = true;

books.forEach((book) => {
  if (book.rented == 0) {
    rented = false;
  }
});

if (rented == true) {
  console.log(`Tous les livres ont été empruntés au moins une fois.`);
} else {
  console.log(`Tous les livres n'ont pas été empruntés au moins une fois.`);
}

let maxRented = 0;
let maxRentedBook;

books.forEach((book) => {
  if (maxRented < book.rented) {
    maxRented = book.rented;
    maxRentedBook = book;
  }
});

console.log(`Le livre le plus emprunté est ` + maxRentedBook.title);

let leastRented = 1000;
let leastRentedBook;

books.forEach((book) => {
  if (leastRented > book.rented) {
    leastRented = book.rented;
    leastRentedBook = book;
  }
});

console.log(`Le livre le moins emprunté est ` + leastRentedBook.title);

let rightBook = false;
let searchBook = prompt("Quel livre cherchez-vous ?");

books.forEach((book) => {
  if (book.id == searchBook) {
    rightBook = true;
    searchBook = book.title;
  }
});

if ((rightBook = true)) {
  console.log(`Le livre que vous cherchez est ` + searchBook + ".");
} else {
  console.log(`Le livre que vous cherchez n'existe pas.`);
}

let lookedForBook = false;
let deleteBook = prompt("Quel livre voulez-vous supprimer ?");

books.forEach((book) => {
  if (book.id == deleteBook) {
    lookedForBook = true;
    deleteBook = book.title;
  }
});

if ((rightBook = true)) {
  books.slice(0, deleteBook, 0);
  console.log(`Le livre que vous avez supprimé est ` + deleteBook + ".");
} else {
  console.log(`Le livre que vous souhaitez supprimer n'existe pas.`);
}

console.log(books);*/

//Exo 14

let text = document.querySelector("#textToCopy");
console.log(text);
text.addEventListener("input", (e) => {
  document.querySelector("#copiedText").value = text.value;
});

// Exo 15

let initialNumber = document.querySelector("#yourValue");
initialNumber.addEventListener("input", (e) => {
  document.querySelector("#initialNumber").innerHTML = initialNumber.value;
  document.querySelector("#squaredNumber").innerHTML =
    initialNumber.value * initialNumber.value;
  document.querySelector("#cubicNumber").innerHTML =
    initialNumber.value * initialNumber.value * initialNumber.value;
});

// Exo 16

let button = document.querySelector("#move");
button.addEventListener("click", (e) => {
  document.querySelector("#square").classList.toggle("inMovementSquare");
});

// Exo 17

let picGallery = document.querySelectorAll(".picGallery img");
console.log(picGallery);
let mainPic = document.querySelector("#mainPic img");
console.log(mainPic);
picGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    console.log(img);
    mainPic.setAttribute("src", img.src);
  });
});

// Exo 18

let submittedForm = document.querySelector("form");
let firstInputNumber;
let operatorSign;
let secondInputNumber;
let result;

submittedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  firstInputNumber = e.target.calcInitialNumber.value;
  operatorSign = e.target.mathSignPicker.value;
  secondInputNumber = e.target.calcSecondNumber.value;
  if (operatorSign == "-") {
    result = firstInputNumber - secondInputNumber;
    alert(`${firstInputNumber} - ${secondInputNumber} = ${result}`);
  } else if (operatorSign == "*") {
    result = firstInputNumber * secondInputNumber;
    alert(`${firstInputNumber} * ${secondInputNumber} = ${result}`);
  } else if (operatorSign == "/") {
    result = firstInputNumber / secondInputNumber;
    alert(`${firstInputNumber} / ${secondInputNumber} = ${result}`);
  } else {
    result = Number(firstInputNumber) + Number(secondInputNumber);
    alert(`${firstInputNumber} + ${secondInputNumber} = ${result}`);
  }
});

// Exo 19

let toggle = document.querySelector("#toggleCalc");
let show = document.querySelector("#showCalc");
let hide = document.querySelector("#hideCalc");

toggle.addEventListener("click", (e) => {
  submittedForm.classList.toggle("show");
});
show.addEventListener("click", (e) => {
  submittedForm.classList.add("show");
});
hide.addEventListener("click", (e) => {
  submittedForm.classList.remove("show");
});

// Exo 20

let firstField = document.querySelector("#calcInitialNumber");
let secondFiled = document.querySelector("#calcSecondNumber");
let mathSignPicker = document.querySelector("#mathSignPicker");

firstField.addEventListener("mouseover", (e) => {
  document.querySelector("#tooltipOne").style.display = "block";
});
firstField.addEventListener("mouseout", (e) => {
  document.querySelector("#tooltipOne").style.display = "none";
});

secondFiled.addEventListener("mouseover", (e) => {
  document.querySelector("#tooltipTwo").style.display = "block";
});
secondFiled.addEventListener("mouseout", (e) => {
  document.querySelector("#tooltipTwo").style.display = "none";
});

mathSignPicker.addEventListener("mouseover", (e) => {
  document.querySelector("#tooltipThree").style.display = "block";
});
mathSignPicker.addEventListener("mouseout", (e) => {
  document.querySelector("#tooltipThree").style.display = "none";
});
