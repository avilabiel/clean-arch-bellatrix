import IMonsterRepository from '../../contracts/i-monster-repository.js';
import IUseCase from '../../contracts/i-use-case.js';
import Monster from '../../entities/monster.js';

class FindBattleMonster implements IUseCase {
  constructor(private monsterRepository: IMonsterRepository) {}

  async execute(): Promise<Monster | null> {
    const monsters = await this.monsterRepository.getAll();

    let spawnChance = Math.random();
    let monsterFound = null;

    monsters.forEach((monster) => {
      spawnChance -= monster.spawnChance;
      if (spawnChance <= 0) {
        monsterFound = monster;
        return;
      }
    });

    return monsterFound;
  }
}

export default FindBattleMonster;
