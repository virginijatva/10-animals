import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js'
import { Hamster } from './components/Hamster.js';
import { Nemo } from './components/Nemo.js';
import{ GoldFish } from './components/GoldFish.js';

const rexas = new Dog ('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const bobis = new Hamster('Bobis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new GoldFish('Ariele', 'golden')

console.log(rexas);
console.log(pukis);
console.log(bobis);
console.log(nemo);
console.log(ariele);

rexas.voice();
pukis.voice();
bobis.voice();
nemo.voice();
ariele.voice();

rexas.introduce();
pukis.introduce();
bobis.introduce();
nemo.introduce();
ariele.introduce();
