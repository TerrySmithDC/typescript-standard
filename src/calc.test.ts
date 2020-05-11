import Calculator from "./calc";

describe('calculate', () => {
    it('add', function() {
      const calculator = new Calculator();
      const result = calculator.Add(5, 2);
      expect(result).toBe(7);
    });

    it('adds with memory', function() {
      const calculator = new Calculator();
      let result = calculator.Add(5, 2);
      result = calculator.Add(2);
      expect(result).toBe(9);
    });

    it('adds with memory from 0', function() {
      const calculator = new Calculator();
      const result = calculator.Add(5);
      expect(result).toBe(5);
    });

    it('subtract', function() {
      const calculator = new Calculator();
      const result = calculator.Subtract(5, 2);
      expect(result).toBe(3);
    });

    it('subtract with memory', function() {
      const calculator = new Calculator();
      let result = calculator.Subtract(5, 2);
      result = calculator.Subtract(2);
      expect(result).toBe(1);
    });

    it('subtract with memory from 0', function() {
      const calculator = new Calculator();
      const result = calculator.Subtract(5);
      expect(result).toBe(-5);
    });

    it('Divide', function() {
      const calculator = new Calculator();
      const result = calculator.Divide(5, 2);
      expect(result).toBe(2.5);
    });

    it('Divide with memory', function() {
      const calculator = new Calculator();
      let result = calculator.Divide(5, 2);
      result = calculator.Divide(2);
      expect(result).toBe(1.25);
    });

    it('Divide with memory from 0', function() {
      const calculator = new Calculator();
      const result = calculator.Divide(5);
      expect(result).toBe(0);
    });

    it('Multiply', function() {
      const calculator = new Calculator();
      const result = calculator.Multiply(5, 2);
      expect(result).toBe(10);
    });
  });
