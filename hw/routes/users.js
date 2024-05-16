const usersRouter = require("express").Router(); 

const findAllUsers = require('../middlewares/user');
const sendAllUsers = require('../controllers/user');

usersRouter.get("/users", findAllUsers, sendAllUsers);

module.exports = usersRouter;