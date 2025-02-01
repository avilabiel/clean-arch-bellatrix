import { describe, expect, it } from 'vitest';
import MonsterRepositoryInMemory from '../../../infra/in-memory/monster-repository-in-memory.js';
import FindBattleMonster from './find-battle-monster.js';
import Monster from '../../entities/monster.js';

describe('FindBattleMonster', () => {
  it('finds a monster to battle', async () => {
    // Mock Math.random to always return 0.2
    const originalRandom = Math.random;
    Math.random = (): number => 0.2;

    const monsterRepository = new MonsterRepositoryInMemory();
    const findBattleMonster = new FindBattleMonster(monsterRepository);
    const monster = await findBattleMonster.execute();

    expect(monster).not.toBe(null);
    expect(monster).toBeInstanceOf(Monster);

    // Restore Math.random
    Math.random = originalRandom;
  });

  it('does not find a monster to battle', async () => {
    // Mock Math.random to always return 0.9
    const originalRandom = Math.random;
    Math.random = (): number => 0.9;

    const monsterRepository = new MonsterRepositoryInMemory();
    const findBattleMonster = new FindBattleMonster(monsterRepository);
    const monster = await findBattleMonster.execute();

    expect(monster).toBe(null);

    // Restore Math.random
    Math.random = originalRandom;
  });
});
