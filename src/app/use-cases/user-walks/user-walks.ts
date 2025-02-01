import IMonsterRepository from '../../contracts/i-monster-repository.js';
import IUseCase from '../../contracts/i-use-case.js';
import IUserRepository from '../../contracts/i-user-repository.js';
import Monster from '../../entities/monster.js';
import User from '../../entities/user.js';
import FindBattleMonster from '../find-battle-monster/find-battle-monster.js';

class UserWalks implements IUseCase {
  constructor(
    private userRepository: IUserRepository,
    private monsterRepository: IMonsterRepository,
  ) {}

  async execute(
    user: User,
    posX: number,
    posY: number,
  ): Promise<Monster | null> {
    // Change position
    user.posX = posX;
    user.posY = posY;

    // Save new position
    await this.userRepository.createOrUpdate(user);

    // Find monster or nothing
    const findBattleMonster = new FindBattleMonster(this.monsterRepository);
    const monsterOrNull = await findBattleMonster.execute();

    return monsterOrNull;
  }
}

export default UserWalks;
