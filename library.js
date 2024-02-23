// Define the Library object
const Library = {
    books: [],

    // Function to add a book to the library
    addBook: function(title, author) {
        const book = {
            title: title,
            author: author,
            available: true
        };
        this.books.push(book);
        console.log(`Book "${title}" by ${author} added to the library.`);
    },

    // Function to display the list of available books
    displayAvailableBooks: function() {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`- ${book.title} by ${book.author}`);
            }
        });
    },

    // Function to borrow a book from the library
    borrowBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`You have borrowed "${title}".`);
            } else {
                console.log(`"${title}" is not available.`);
            }
        } else {
            console.log(`"${title}" not found in the library.`);
        }
    },

    // Function to return a book to the library
    returnBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (!book.available) {
                book.available = true;
                console.log(`You have returned "${title}".`);
            } else {
                console.log(`"${title}" is already available.`);
            }
        } else {
            console.log(`"${title}" not found in the library.`);
        }
    }
};

// Example usage:
Library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
Library.addBook("To Kill a Mockingbird", "Harper Lee");
Library.addBook("1984", "George Orwell");

Library.displayAvailableBooks();

Library.borrowBook("The Great Gatsby");
Library.borrowBook("To Kill a Mockingbird");
Library.borrowBook("1984");
Library.borrowBook("Animal Farm");

Library.displayAvailableBooks();

Library.returnBook("The Great Gatsby");
Library.returnBook("1984");

Library.displayAvailableBooks();
