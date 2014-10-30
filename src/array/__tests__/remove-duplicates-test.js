jest.dontMock('../remove-duplicates');

describe('removeDuplicates()', () => {
  it('should return an array without any duplicated value', () => {
    let { removeDuplicates, rRemoveDuplicates } = require('../remove-duplicates');

    expect(removeDuplicates([1,2,3,1,4])).toEqual([1,2,3,4]);
    expect(rRemoveDuplicates([1,2,3,1,4])).toEqual([1,2,3,4]);
  });
});
