import Friends from "../db/models/friends.js";
import User from "../db/models/user.js";

class UserServices {
    constructor(userDto) {
        this.userDto = userDto;
    };

    async getAllUsers() {
        return await User.getAllUsers();
    };

    async getFriends(id, order_by, order_type) {
        return await Friends.getFriends(id, order_by, order_type);
    };

    async maxFollowing() {
        return await Friends.maxFollowing();
    };

    async notFollowing() {
        return await User.notFollowing();
    };

    async getUser(id) {
        return await User.getUser(id);
    };
}
export { UserServices };
