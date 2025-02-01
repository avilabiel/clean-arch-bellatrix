import Monster from '../entities/monster.js';

interface IMonsterRepository {
  getAll(): Promise<Monster[]>;
}

export default IMonsterRepository;
