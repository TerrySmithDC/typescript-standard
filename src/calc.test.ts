import Calculator from "./calc";

describe('calculate', () => {
    it('add', function() {
      const calculator = new Calculator();
      const result = calculator.Add(5, 2);
      expect(result).toBe(7);
    });

    it('subtract', function() {
      const calculator = new Calculator();
      const result = calculator.Subtract(5, 2);
      expect(result).toBe(3);
    });

    it('Divide', function() {
      const calculator = new Calculator();
      const result = calculator.Divide(5, 2);
      expect(result).toBe(2.5);
    });

    it('Multiply', function() {
      const calculator = new Calculator();
      const result = calculator.Multiply(5, 2);
      expect(result).toBe(10);
    });
  });
