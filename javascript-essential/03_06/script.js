/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  6: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

//Accessing objects
console.log("The backpack object:", backpack);

//Accessing objects properties

//Dot notation
console.log("The pocketNum value:", backpack.pocketNum);
console.log(
  "The straplength object:",
  "left:",
  backpack.strapLength.left,
  "right:",
  backpack.strapLength.right
);

//Bracket notation
console.log("The pocketNum value:", backpack["pocketNum"]);

//More control
var query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);

//when standard rule brackes{when using a prewritten code by other}
//var coloring = "6";
console.log("The color6 value:", backpack["6"]);
