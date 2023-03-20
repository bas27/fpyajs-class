import Character from '../Character';

const res = {
  name: 'Jon',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 23,
  defence: 23,
};

describe('Tests class Character', () => {
  it('create object Character', () => {
    const jon = new Character('Jon', 'Undead', 23, 23);
    expect(jon).toEqual(res);
  });

  it('create object Character with unsupported type', () => {
    try {
      const jon = new Character('Jon', 'Wolf', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('This type does not exist');
    }
  });

  it('create object Character with length name error', () => {
    try {
      const jon = new Character('J', 'Bowman', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Length name error');
    }
  });

  it('create object Character with name is not string', () => {
    try {
      const jon = new Character(999, 'Wolf', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Name is not string');
    }
  });
});
