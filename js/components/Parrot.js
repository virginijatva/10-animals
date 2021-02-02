import { Bird } from './Bird.js';

class Parrot extends Bird{
constructor(name, color) {
    super(name, color);
    this.breed = 'Talking bird';
    this.environment = 'sky';
    this.sound = 'Arrrr 🦜';
}
}

export { Parrot }