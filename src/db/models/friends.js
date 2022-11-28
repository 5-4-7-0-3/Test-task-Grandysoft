import { Model } from 'objection';

class Friends extends Model {
  static get tableName() {
    return 'friends';
  }

  static async getFriends(id, order_by, order_type) {
    return await Friends.query()
    .where({subscribe: id})
    .orWhere({subscribe_to: id})
    .orderBy(order_by, order_type)
  };

  static async maxFollowing() {
    return await Friends.query()
    .select('subscribe')
    .groupBy('subscribe')
    .count('subscribe')
    .orderBy('count', 'desc')
    .limit(5)
  };
}

export default Friends;
