const {mean,median,mode,makeNums} = require("./helpers")

describe("mean function", () => {

    test('return avg', () => {
      let result = mean([1,3,5,7]);
      expect(result.response.value).toEqual(4);
      expect(result.response.operation).toEqual('mean');
    });
  
  });

describe("median function", () =>  {

    test('return median', () => {
      let result = median([1,3,5,7]);
      expect(result.response.value).toEqual(4);
      expect(result.response.operation).toEqual('median');
    });
  
  });

describe("mode function", () => {

    test('return mode with all unique values', () => {
      let result = mode([1,3,5,7]);
      expect(result.response.value).toEqual('No mode');
      expect(result.response.operation).toEqual('mode');
    });

    test('return mode', () => {
      let result = mode([1,3,3,5,7]);
      expect(result.response.value).toEqual(3);
      expect(result.response.operation).toEqual('mode');
    });
  
  });

  describe("makeNums function", () =>  {

    test('return numbers from string', () => {
      let result = makeNums(['1','3','5','7']);
      expect(result).toEqual([1,3,5,7]);
    });
  
  });