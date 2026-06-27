function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}
function validateCount(value) {
    try {
        const parsed = parseCount(value);
        return parsed;
    } catch (error) {
        return error;
    }
}
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const s = Math.sqrt(
            (this.perimeter / 2) *
                (this.perimeter / 2 - this.a) *
                (this.perimeter / 2 - this.b) *
                (this.perimeter / 2 - this.c)
        );
        return parseFloat(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}
