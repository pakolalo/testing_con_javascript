const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Halo',
  },
  {
    _id: 2,
    name: 'Gears of War',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
    test('Should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Halo');
    });
  });
});
