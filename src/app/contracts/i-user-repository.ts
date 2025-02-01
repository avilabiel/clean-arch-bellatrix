import User from '../entities/user.js';

interface IUserRepository {
  createOrUpdate(user: User): Promise<User>;

  getById(userId: number): Promise<User | null>;
}

export default IUserRepository;
