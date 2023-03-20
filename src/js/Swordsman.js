import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, health, level, type = 'Swordsman', attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
