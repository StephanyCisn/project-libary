function findAccountById(accounts, id) { 
  const found = accounts.find(account => account.id === id); return found;
}


function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => {
    if (accountA.name.last > accountB.name.last)
      return 1;
    if (accountA.name.last < accountB.name.last)
      return -1;
    if (accountA.name.last = accountB.name.last)
      return 0
  });
return accounts;}




function getTotalNumberOfBorrows(account, books) {
  const { id: accId } = account;

  return books.reduce((accumulator, book) => {
    return (
      accumulator +
      book.borrows
        .filter(borrow => borrow.id === accId)
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
}


function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
  books.forEach(book => {
    if (book.borrows.find(item => item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })
  console.log(books_taken);
  books_taken.forEach(book => {
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  console.log(books_taken);
  return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
