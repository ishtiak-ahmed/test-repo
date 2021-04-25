class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return (Math.PI * Math.pow(this.radius, 2))
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return (this.height * this.width / 2)
    }
}

const shapes = [new Circle(10), new Rectangle(8, 7), new Triangle(6, 5)]

for (let i = 0; i < shapes.length; i++) {
    const element = shapes[i];
    console.log(element.area())
}