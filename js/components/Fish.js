import { Animal } from './Animal.js';

class Fish extends Animal{
    constructor(name, color) {
        super(name, color);
        this.breed = 'Unknown animal';
        this.skin = 'scales';
        this.environment = 'water';
        this.sound = 'Bul bul';
    }
}

export { Fish }