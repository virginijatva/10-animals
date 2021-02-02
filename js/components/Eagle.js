import { Bird } from './Bird.js';

class Eagle extends Bird{
constructor(name, color) {
    super(name, color);
    this.breed = 'Hawk';
    this.environment = 'sky';
    this.sound = 'Ka kaaaa 🦅';
}
}

export { Eagle }