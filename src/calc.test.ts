import Calculator from "./calc";

describe('calculate', () => {
    it('add', function() {
      const calculator = new Calculator();
      const result = calculator.Add(5, 2);
      expect(result).toBe(7);
    });
  });
