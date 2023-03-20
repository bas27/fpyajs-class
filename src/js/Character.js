export default class Character {
  static typeCharacter = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    if ((this.name).length < 2 || (this.name).length > 10) {
      throw new Error('Length name error');
    } else if (typeof (this.name) !== 'string') {
      throw new Error('Name is not string');
    }
    this.type = type;
    if (!Character.typeCharacter.includes(this.type)) {
      throw new Error('This type does not exist');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
