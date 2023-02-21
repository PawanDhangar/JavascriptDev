/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
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
  "December 5, 2018 15:00:00 PST"
);

const content = `
<main>
<article>
        <h1>Name: ${everydayPack.name}</h1>
        <ul>
          <li>Volume: ${everydayPack.volume}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>PocketNum: ${everydayPack.pocketNum}</li>
          <li>LidStatus: ${everydayPack.lidOpen}</li>
          <li>StrepLengthL: ${everydayPack.strapLength.left}</li>
          <li>StrepLengthR:${everydayPack.strapLength.right}</li>
          <li>BackpackAge: ${everydayPack.backpackAge()}</li>
        </ul> 
      </article>
      </main>`;

const stringOutput = "<h1>" + everydayPack.name + "<h1>";

document.body.innerHTML = content;
