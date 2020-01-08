const sorter = require('./solution');

describe('The Integer Sorting Kata', () => {
  test('should return empty array with null input', () => {
    let actual = sorter.sort(null);
    expect(actual).toEqual([]);
  });

  test('should return empty array with empty array input', () => {
    let actual = sorter.sort([]);
    expect(actual).toEqual([]);
  });

  test('should return the array with single item array input', () => {
    let actual = sorter.sort([1]);
    expect(actual).toEqual([1]);
  })

});
