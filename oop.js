class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class SweetHeart extends Person {
    constructor(name, age) {
        super(name, age,)
        this.lastName = 'Ahemd'
    }
    proposeHer() {
        console.log(this.name, 'Sweet Heart, Marry me.')
    }
}

const Emma = new SweetHeart('Emma', 31)
console.log(Emma)
Emma.proposeHer()