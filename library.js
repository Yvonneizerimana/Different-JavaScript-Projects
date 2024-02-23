// Book object constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }
  
  // Library object
  const Library = {
    books: [],
  
    // Function to add a book to the library
    addBook: function(title, author) {
      const book = new Book(title, author);
      this.books.push(book);
      return { success: true, message: `The book ${book.title} by ${book.author} has been added to the library.` };
    },
  
    // Function to display the list of available books
    displayAvailableBooks: function() {
      const availableBooks = this.books.filter(book => book.available);
      const bookList = availableBooks.map((book, index) => `${index + 1}. ${book.title} by ${book.author}`);
      return { success: true, message: "Available Books:", books: bookList };
    },
  
    // Function to borrow a book
    borrowBook: function(bookIndex) {
      if (bookIndex >= 0 && bookIndex < this.books.length) {
        const book = this.books[bookIndex];
        if (book.available) {
          book.available = false;
          return { success: true, message: `You have borrowed the book: ${book.title} by ${book.author}` };
        } else {
          return { success: false, message: `Sorry, the book ${book.title} is currently unavailable.` };
        }
      } else {
        return { success: false, message: "Invalid book index." };
      }
    },
  
    // Function to return a book
    returnBook: function(bookIndex) {
      if (bookIndex >= 0 && bookIndex < this.books.length) {
        const book = this.books[bookIndex];
        if (!book.available) {
          book.available = true;
          return { success: true, message: `You have returned the book: ${book.title} by ${book.author}` };
        } else {
          return { success: false, message: `The book ${book.title} is already available.` };
        }
      } else {
        return { success: false, message: "Invalid book index." };
      }
    }
  };
  
  // Add books to the library
  const addBookResult1 = Library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
  const addBookResult2 = Library.addBook("To Kill a Mockingbird", "Harper Lee");
  const addBookResult3 = Library.addBook("1984", "George Orwell");
  
  console.log(addBookResult1);
  console.log(addBookResult2);
  console.log(addBookResult3);
  
  // Display available books
  const displayResult = Library.displayAvailableBooks();
  console.log(displayResult);
  
  // Borrow a book
  const borrowResult1 = Library.borrowBook(1);
  console.log(borrowResult1);
  
  // Try to borrow an unavailable book
  const borrowResult2 = Library.borrowBook(1);
  console.log(borrowResult2);
  
  // Return a book
  const returnResult = Library.returnBook(1);
  console.log(returnResult);
  
  // Display updated available books
  const updatedDisplayResult = Library.displayAvailableBooks();
  console.log(updatedDisplayResult);