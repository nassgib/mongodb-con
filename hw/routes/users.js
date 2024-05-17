const usersRouter = require("express").Router(); 

const {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmail,
  } = require('../middlewares/user');
const {
    sendAllUsers,
    sendUserById,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
  } = require('../controllers/user');

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post("/users", checkEmptyNameAndEmail, createUser, sendUserCreated);

usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;