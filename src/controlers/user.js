
class UserController {
    constructor(userService) {
        this.userService = userService;
    };

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async getFriends(req, res) {
        try {
            const { order_by, order_type } = req.query
            const { id } = req.params;
            const users = await this.userService.getFriends(id, order_by, order_type);
            const friends = await this.friend(id, users);
            res.json(friends);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async maxFollowing(req, res) {
        try {
            const users = await this.userService.maxFollowing();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async notFollowing(req, res) {
        try {
            const users = await this.userService.notFollowing();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async friend(id, users) {
        const friends = [];
            for (const k in users) {
                if (users[k].subscribe == id) {
                    for (const key in users) {
                        if (users[key].subscribe == users[k].subscribe_to) {
                            friends.push(await this.userService.getUser(users[key].subscribe));
                        };
                    };
                };
            };
        return friends
    };
}
export { UserController };
