const { Router } = require("express");

const {
  createUser,
  readUser,
  readUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/readUsers", readUsers);
userRouter.get("/readUser/:id", readUser);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);

module.exports = userRouter;
