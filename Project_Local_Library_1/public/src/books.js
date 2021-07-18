function findAuthorById(authors, id) {const found = authors.find(author => author.id === id); return found;
}


function findBookById(books, id) {const found = books.find(book => book.id === id); return found;
}




function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let returned = [];
  let notReturned = [];
  books.forEach((book) => {
    if (book.borrows.some((b) => b.returned === false)) {
      notReturned.push(book);
    } else {
      returned.push(book);
    }
  })
  result.push(notReturned);
  result.push(returned);
  return result;
}












function getBorrowersForBook(book, accounts) {
  
  const { borrows } = book;

  const borrowers = borrows.map(({ id, returned })=> {
    
    const account = accounts.find(account => account.id === id);

    
    return {
      ...account,
      returned,
    };
  });

  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
