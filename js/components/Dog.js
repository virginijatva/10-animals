import { Pet } from './Pet.js'

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au au';
        this.breed = 'Dog';
    }
}

export { Dog }