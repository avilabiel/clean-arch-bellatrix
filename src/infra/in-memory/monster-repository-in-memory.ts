import IMonsterRepository from '../../app/contracts/i-monster-repository.js';
import Monster from '../../app/entities/monster.js';

class MonsterRepositoryInMemory implements IMonsterRepository {
  private monsters: Monster[] = [
    new Monster({
      id: 1,
      name: 'Rato',
      level: 1,
      atkMin: 2,
      atkMax: 3,
      xp: 10,
      spawnChance: 0.3,
    }),
    new Monster({
      id: 2,
      name: 'Goblin',
      level: 5,
      atkMin: 5,
      atkMax: 7,
      xp: 30,
      spawnChance: 0.1,
    }),
  ];

  async getAll(): Promise<Monster[]> {
    return this.monsters;
  }
}

export default MonsterRepositoryInMemory;
