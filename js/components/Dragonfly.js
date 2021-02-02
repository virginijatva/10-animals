import { Bird } from './Bird.js';

class Dragonfly extends Bird{
constructor(name, color) {
    super(name, color);
    this.breed = 'Flying bug';
    this.environment = 'sky';
    this.sound = 'Bzzz 🦋';
    this.imposter = true;
}
}

export { Dragonfly }