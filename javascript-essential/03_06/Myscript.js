/**
 * Creating a laptop object
 */

const laptop = {
  name: "hp",
  ssd: 512,
  ram: 8,
  os: {
    window: 11,
    linux: 10,
  },
  price: 450000,
  browsername: chrome,
  browser: function (Browserusing) {
    this.browsername = Browserusing;
  },
};

console.log("the laptop is:", laptop);

console.log("The Ram is:", laptop.ram);
console.log("The os is:", laptop.os.window);
console.log("The br is:", laptop.browser);

console.log("The Ram is:", laptop["ram"]);
console.log("The os is:", laptop["os"]["linux"]);
var query = "browser";
console.log("The browser is:", laptop[query]);
var oper = "os";
console.log("The os is:", laptop[oper]["window"]);
