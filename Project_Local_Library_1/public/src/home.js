function getTotalBooksCount(books) {
  let result = books.length;
  return result;
}




function getTotalAccountsCount(accounts) { 
  let result = accounts.length;
  return result;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
for (let book of books) {
if (book.borrows[0].returned === false) {
  counter += 1;
}
}
return counter;
}



function getMostCommonGenres(books) { 
  let countObj = {};
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books) { 
  let popBooks = [];
  books.forEach((book) => {
      popBooks.push( {name: book.title, count: book.borrows.length } );
  })
  return topFive(popBooks);
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      const full = `${author.name.first} ${author.name.last}`;
      if (book.authorId === author.id) {
        popAuthors.push( {name: full, count: book.borrows.length} )
      }
    })
  })
  return topFive(popAuthors);
}

//helper
function topFive(result) {
  return result.sort((valueA, valueB) => valueA.count < valueB.count ? 1 : -1).splice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
