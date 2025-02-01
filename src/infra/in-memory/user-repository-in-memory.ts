import IUserRepository from '../../app/contracts/i-user-repository.js';
import User from '../../app/entities/user.js';

class UserRepositoryInMemory implements IUserRepository {
  private users = [];

  async createOrUpdate(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index === -1) {
      this.users.push(user);
    } else {
      this.users[index] = user;
    }

    return user;
  }

  async getById(userId: number): Promise<User | null> {
    return this.users.find((u) => u.id === userId) || null;
  }
}

export default UserRepositoryInMemory;
