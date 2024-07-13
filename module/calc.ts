const P1 = 3.14;

function square(x: number) {
    return x ** 2;
}

class Rectangle {
    private width: number;
    private height: number;
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    getArea() {
        return this.width * this.height;
    }
}

interface Point {
    x: number;
    y: number;
}

type LengthUnit = 'cm' | 'm' | 'km';

export { P1, square, Rectangle, type Point, type LengthUnit };
