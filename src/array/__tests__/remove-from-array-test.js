jest.dontMock('../remove-from-array');

describe('removeFromArr()', () => {
  it('should remove a value from an array', () => {
    var removeFromArr = require('../remove-from-array');
    var arr = [1,2,3];

    expect(arr).toEqual([1,2,3]);
    removeFromArr(arr, 2);
    expect(arr).toEqual([1,3]);
  });
});
