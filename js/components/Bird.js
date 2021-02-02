import { Animal } from './Animal.js'

class Bird extends Animal{
constructor(name, color) {
    super(name, color);
    this.breed = 'Unknown bird';
    this.environment = 'sky';
    this.sound = 'Ka kaaaa, puk pukaaak, bzzzz, arrr 🦅🐔🦋🦜';
}
}

export { Bird }