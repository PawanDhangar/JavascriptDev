/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "Feb 28, 2023 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Day Remain:", everydayPack.lastDate);

console.log("Day Remain:", everydayPack.backpackAge());
console.log("Day Remain:", everydayPack.backpackWarrenty());

const birthday = new Date("Feb 9,2023 15:00 PST");

console.log(birthday.getFullYear());
