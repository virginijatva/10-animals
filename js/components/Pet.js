import { Animal } from './Animal.js';

class Pet extends Animal{
    constructor(name, color) {
        super(name,color);
        this.breed = 'Unknown animal';
        this.skin = 'fur';
        this.environment = 'land';
        this.sound = 'Miau, au, nom';
    }
}

export { Pet }