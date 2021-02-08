class Animal {
constructor(name, color) {
    this.breed = 'Unknown animal';
    this.skin = 'Feathers, fur, scales';
    this.environment = 'sky, earth, water';
    this.name = name;
    this.color = color;
    this.sound = 'Au, miau, nom, ka kaaaa, puk pukaaak, bzzzz, arrr';
}

voice() {
    console.log(`${this.breed} ${this.name} says: ${this.sound}`);
}

introduce() {
    console.log(`Hi, I am ${this.name}, my ${this.skin} are ${this.color} and I say ${this.sound}`);
}
}

export { Animal }