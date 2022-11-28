import { Model } from 'objection';
import Friends from './friends.js';

class User extends Model {
  static get tableName() {
    return 'users';
  };

  static async getAllUsers() {
    return await User.query()
  };

  static async getUser(id) {
    return await User.query()
    .where({id: id})
  };

  static async getUser(id) {
    return await User.query()
    .where({id: id})
  };

  static async notFollowing() {
    return await User.query()
    .select('id')
    .whereNotExists(
        Friends.query()
        .select('subscribe')
        .groupBy('subscribe')
        .whereRaw('users.id = friends.subscribe')
    )
  };
}

export default User;
