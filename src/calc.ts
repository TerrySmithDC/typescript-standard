export default class Calculator {
    private prev: number;

    constructor() {
        this.prev = 0;
    }
    public Add(a: number, b?: number): number {
        if (!b) {
            this.prev = this.prev + a;
        } else {
            this.prev = a + b;
        }
        return this.prev;
    }

    public Subtract(a: number, b: number): number {
        if (!b) {
            this.prev = this.prev - a;
        } else {
            this.prev = a - b;
        }

        return this.prev;
    }

    public Divide(a: number, b: number): number {
        return a / b;
    }

    public Multiply(a: number, b: number): number {
        return a * b;
    }
}
