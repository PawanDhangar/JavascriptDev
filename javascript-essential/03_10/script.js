/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Laptop from "./Laptop.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

// const hp = new Laptop("hp", 512, 8, 11, 10, 45000);
// const Dell = new Laptop("Dell", 1024, 16, 11.0, 10.1, 60000);
const MacOS = new Laptop("MAcos", 2098, 32, 11.3, 10.1, 60000, "chrome");

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("straplenght:", everydayPack.strapLength.left);

// console.log("The hp object:", hp);
// console.log("The ssd value:", hp.ssd);
// console.log("OS:", hp.os.window);

// console.log("The Dell object:", Dell);
// console.log("The ssd value:", Dell.ssd);
// console.log("OS:", Dell.os.window);

console.log("The MacOS object:", MacOS);
console.log("The ssd value:", MacOS.ssd);
console.log("OS:", MacOS.os.window);
MacOS.browser("edge");
console.log("Browser:", MacOS.browser());
