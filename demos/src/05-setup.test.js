describe('Set', () => {

  beforeAll(() => {
    console.log('beforeAll');
    // runs before all tests in this block
  });

  afterAll(() => {
    console.log('afterAll');
    // runs after all tests in this block
  });

  beforeEach(() => {
    console.log('beforeEach');
    // runs before each test in this block
  })

  afterEach(() => {
    console.log('afterEach');
    // runs after each test in this block
  })

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2)
  });

  test('case 2', () => {
    console.log('case 2');
    expect(3 + 1).toBe(4)
  });

  describe('Other group', () => {

    beforeAll(() => {
      console.log('beforeAll');
      // runs before all tests in this block
    });

    test('case 3', () => {
      console.log(('case 3'));
      expect(1 + 1).toBe(2)
    });

    test('case 4', () => {
      console.log('case 4');
      expect(3 + 1).toBe(4)
    });
  });
});
