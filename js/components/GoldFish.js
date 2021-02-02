import { Fish } from './Fish.js';

class GoldFish extends Fish{
    constructor(name, color) {
        super(name, color);
        this.breed = 'Goldfish';
        this.environment = 'water';
        this.sound = 'Bul bul';
    }
}

export { GoldFish }