import Character from './Character';

export default class Daemon extends Character {
  constructor(name, health, level, type = 'Daemon', attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
