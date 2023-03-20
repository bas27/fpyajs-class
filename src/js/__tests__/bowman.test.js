import Bowman from '../Bowman';

const res = {
  name: 'Bow',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Test class Bowman', () => {
  const b1 = new Bowman('Bow');
  expect(b1).toEqual(res);
});
