import { describe, expect, it } from 'vitest';
import User from '../../entities/user.js';
import UserWalks from './user-walks.js';
import UserRepositoryInMemory from '../../../infra/in-memory/user-repository-in-memory.js';
import MonsterRepositoryInMemory from '../../../infra/in-memory/monster-repository-in-memory.js';

describe('UserWalks', () => {
  it('changes the user position', async () => {
    const user = new User({
      id: 1,
      name: 'r20',
      level: 1,
      atkMin: 3,
      atkMax: 5,
      xp: 0,
      posY: 0,
      posX: 0,
    });

    const userRepository = new UserRepositoryInMemory();
    const monsterRepository = new MonsterRepositoryInMemory();

    const userWalks = new UserWalks(userRepository, monsterRepository);

    await userWalks.execute(user, 1, 1);

    const updatedUser = await userRepository.getById(user.id);

    expect(updatedUser.posX).toBe(1);
    expect(updatedUser.posY).toBe(1);
  });
});
