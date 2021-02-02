import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js'
import { Hamster } from './components/Hamster.js';
import { Nemo } from './components/Nemo.js';
import{ GoldFish } from './components/GoldFish.js';
import { Chicken } from './components/Chicken.js';
import { Eagle } from './components/Eagle.js';
import { Parrot } from './components/Parrot.js';
import { Dragonfly } from './components/Dragonfly.js';

const rexas = new Dog ('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const bobis = new Hamster('Bobis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new GoldFish('Ariele', 'golden')
const nugget = new Chicken('Nugget', 'brown');
const thunder = new Eagle('Thunder', 'dark brown');
const pirate = new Parrot('Pirate', 'rainbowy');
const wingy = new Dragonfly('Wingy', 'green');

console.log(rexas);
console.log(pukis);
console.log(bobis);
console.log(nemo);
console.log(ariele);
console.log(nugget);
console.log(thunder);
console.log(pirate);
console.log(wingy);

rexas.voice();
pukis.voice();
bobis.voice();
nemo.voice();
ariele.voice();
nugget.voice();
thunder.voice();
pirate.voice();
wingy.voice();

rexas.introduce();
pukis.introduce();
bobis.introduce();
nemo.introduce();
ariele.introduce();
nugget.introduce();
thunder.introduce();
pirate.introduce();
wingy.introduce();