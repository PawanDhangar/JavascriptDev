/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const maths = new Book(
  "mathsstandard",
  "Mathamatics",
  "R.D. Sharma",
  500,
  250,
  300,
  "Feb 8 2023 15:00 PDT"
);

const English = new Book(
  "EnglishSTD",
  "English",
  "Richard",
  200,
  200,
  280,
  "Feb 8 2023 15:00 PDT"
);

const Physics = new Book(
  "NCRT physics",
  "Physics",
  "R.C.Varma",
  550,
  300,
  350,
  "Feb 8 2023 15:00 PDT"
);

const Chemistry = new Book(
  "NCRT Chemistry",
  "Chemistry",
  "Remanand",
  450,
  270,
  320,
  "Feb 8 2023 15:00 PDT"
);

const Hindhi = new Book(
  "NCRT Hindhi",
  "Hindhi",
  "Priyadarshan",
  200,
  200,
  250,
  "Feb 8 2023 15:00 PDT"
);

const time = new Date();
console.log(time);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.dateAcquired);
console.log("Days since aquired:", everydayPack.backpackAge());

//Book properties accessing
console.log("The Book:", maths);
console.log("The Book author:", maths.Author);
console.log("The Book Subject:", maths.subject);
console.log("The Book Name:", maths.name);
console.log("The Book pages:", maths.pages);
maths.Subject("Science");
console.log("The Book Subject:", maths.subject);
console.log("The Book price Online:", maths.price.PriceAtonline);
console.log("The Book price Retail:", maths.price.priceAtretail);

maths.Price(340, 440);

console.log("The Book price Retail:", maths.price.priceAtretail);

console.log("The lastdate: ", maths.BookSubDate);

console.log("The DaysRemains: ", maths.BookToLib());

//Physics
console.log("The Book:", Physics);
console.log("The Book author:", Physics.Author);
console.log("The Book Subject:", Physics.subject);
console.log("The Book Name:", Physics.name);
console.log("The Book pages:", Physics.pages);
console.log("The Book price Online:", Physics.price.PriceAtonline);
console.log("The Book price Retail:", Physics.price.priceAtretail);

console.log("The Book:", Chemistry);
console.log("The Book author:", Chemistry.Author);
console.log("The Book Subject:", Chemistry.subject);
console.log("The Book Name:", Chemistry.name);
console.log("The Book pages:", Chemistry.pages);
console.log("The Book price Online:", Chemistry.price.PriceAtonline);
console.log("The Book price Retail:", Chemistry.price.priceAtretail);

console.log("The Book:", English);
console.log("The Book author:", English.Author);
console.log("The Book Subject:", English.subject);
console.log("The Book Name:", English.name);
console.log("The Book pages:", English.pages);
console.log("The Book price Online:", English.price.PriceAtonline);
console.log("The Book price Retail:", English.price.priceAtretail);

console.log("The Book:", Hindhi);
console.log("The Book author:", Hindhi.Author);
console.log("The Book Subject:", Hindhi.subject);
console.log("The Book Name:", Hindhi.name);
console.log("The Book pages:", Hindhi.pages);
console.log("The Book price Online:", Hindhi.price.PriceAtonline);
console.log("The Book price Retail:", Hindhi.price.priceAtretail);
