const gamesRouter = require("express").Router();

const {
    findAllGames,
    createGame,
    updateGame,
    deleteGame,
    checkEmptyFields,
  } = require('../middlewares/games');
const {
    sendAllGames,
    sendCreateGame,
    sendGameUpdated,
    sendGameDeleted,
  } = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", checkEmptyFields, createGame, sendCreateGame);

gamesRouter.put("/games/:id", checkEmptyFields, updateGame, sendGameUpdated);

gamesRouter.delete( "/games/:id", deleteGame, sendGameDeleted ); 

module.exports = gamesRouter;