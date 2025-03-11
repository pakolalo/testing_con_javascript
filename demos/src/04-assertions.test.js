// matchers
test('obj', () => {
  const data = { name: 'Isco' };
  data.lastname = 'del Collado';
  expect(data).toEqual({ name: 'Isco', lastname: 'del Collado' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('arrays', () => {
  const numbers = [1,2,3,4];
  expect(numbers).toContain(3);
});
