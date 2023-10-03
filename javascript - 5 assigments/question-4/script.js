// Sample list of books with authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2012 },
    { title: "Book 5", author: "author 5", year: 2007 },
    { title: "Book 6", author: "author 6", year: 2009 },
    { title: "Book 7", author: "author 7", year: 2041 },
    { title: "Book 8", author: "author 8", year: 1925 },
    { title: "Book 9", author: "author 9", year: 2000 },
    { title: "Book 10", author: "author 10", year: 2002 },
    { title: "Book 11", author: "author 11", year: 2003 },
    { title: "Book 12", author: "author 12", year: 2052 },
    { title: "Book 13", author: "author 13", year: 2031 },
  ];


  
  // Function to filter books published before 2010 and capitalize author names
  function filterAndCapitalize(books) {
    const filteredBooks = books.filter((book) => book.year >= 2010);
    const capitalizedBooks = filteredBooks.map((book) => {
      return {
        title: book.title,
        author: book.author.toUpperCase(), // Capitalize the author's name
        year: book.year,
      };
    });
    return capitalizedBooks;
    
  }
  
  // Call the function and print the result
  const newBooks = filterAndCapitalize(books);
  console.log(newBooks);




