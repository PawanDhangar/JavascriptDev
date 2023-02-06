class Laptop {
  constructor(
    // Defines parameters:
    name,
    ssd,
    ram,
    windowOS,
    linuxOS,
    price,
    browsername
  ) {
    this.name = name;
    this.ssd = ssd;
    this.ram = ram;
    this.os = {
      window: windowOS,
      linux: linuxOS,
    };
    this.price = price;
    this.browsername = browsername;
  }
  browser(Browserusing) {
    this.browsername = Browserusing;
  }

  OperaingS(window, linux) {
    this.os.window = window;
    this.os.linux = linux;
  }
}

export default Laptop;
