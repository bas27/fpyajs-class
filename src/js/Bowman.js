import Character from './Character';

export default class Bowman extends Character {
  constructor(name, health, level, type = 'Bowman', attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
