/* eslint-disable arrow-body-style */
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

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('Should return a list of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Halo 2',
      }]);
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Halo 2');
    });
  });
});
