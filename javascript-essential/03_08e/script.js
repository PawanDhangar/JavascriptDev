/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  Nameid: function (currName) {
    this.name = currName;
  },
  volume: 30,
  Volumeid: function (currVolume) {
    this.volume = currVolume;
  },
  color: "grey",
  Colorid: function (currColor) {
    this.color = currColor;
  },
  pocketNum: 15,
  Pocketid: function (currPocket) {
    this.pocketNum = currPocket;
  },
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

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);

backpack.Nameid("Amarican touristor");
console.log("new Name:", backpack.name);

backpack.Volumeid(40);
console.log("new volume:", backpack["volume"]);

backpack.Colorid("red");
console.log("New color:", backpack.color);

backpack.Pocketid(30);
console.log("new PocketNum:", backpack.pocketNum);
