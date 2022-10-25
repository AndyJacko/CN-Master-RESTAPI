const { Router } = require("express");

const {
  createUser,
  readUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/user");

const { hashPass } = require("../middleware/hash");

const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.get("/readUsers", readUsers);
userRouter.get("/readUser/:id", readUser);
userRouter.put("/updateUser", hashPass, updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
