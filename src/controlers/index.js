import services from "../services/index.js";
import { UserController } from "./user.js";

const userController = new UserController(services.userServices);

export default {
    userController,
};
