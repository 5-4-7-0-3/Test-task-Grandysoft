import express from "express";
import controllers from "../controlers/index.js";
const router = express.Router();

router.get(
    "/users",
    controllers.userController.getAllUsers.bind(controllers.userController)
);

router.get(
    "/users/:id/friends",
    controllers.userController.getFriends.bind(controllers.userController)
);

router.get(
    "/max-following",
    controllers.userController.maxFollowing.bind(controllers.userController)
);

router.get(
    "/not-following",
    controllers.userController.notFollowing.bind(controllers.userController)
);
export default router;
