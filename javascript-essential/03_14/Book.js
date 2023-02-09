class Book {
  constructor(
    name,
    subject,
    Author,
    pages,
    priceAtonline,
    priceAtretail,
    BookSubDate
  ) {
    this.name = name;
    this.subject = subject;
    this.Author = Author;
    this.pages = pages;
    this.price = {
      PriceAtonline: priceAtonline,
      priceAtretail: priceAtretail,
    };
    this.BookSubDate = BookSubDate;
  }

  Subject(BookSub) {
    this.subject = BookSub;
  }

  Price(priceAtonline, priceAtretail) {
    this.price.PriceAtonline = priceAtonline;
    this.price.priceAtretail = priceAtretail;
  }

  BookToLib() {
    let now = new Date();
    let lastDate = new Date(this.BookSubDate);
    let Dayremains = lastDate - now;
    let days = Math.floor(Dayremains / (1000 * 3600 * 24));
    return days;
  }
}

export default Book;
