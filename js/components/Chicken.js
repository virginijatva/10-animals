import { Bird } from './Bird.js';

class Chicken extends Bird{
constructor(name, color) {
    super(name, color);
    this.breed = 'Home bird';
    this.environment = 'sky';
    this.sound = 'Puk pukaaak 🐔';
}
}

export { Chicken }