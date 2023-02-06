const Laptop = {
  name: "hp",
  price: 45000,
  ram: 8,
  os: {
    window: 11,
    linux: 10,
  },
  storage: {
    SSD: 512,
    HDD: 1024,
  },
  browser: chrome,
  browser: function (browser) {
    this.browser = browser;
  },

  Storageid: function (ssd, hdd) {
    this.storage.SSD = ssd;
    this.storage.HDD = hdd;
  },
};

console.log("The Laptop is:", Laptop);
console.log("The Name is:", Laptop.name);
console.log("The Storage SSD:", Laptop.storage.SSD);

// Laptop.Storageid(1024, 2048);

console.log("The Storage SSD:", Laptop.storage.SSD);
