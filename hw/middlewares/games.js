const game = require('../models/game');

const findAllGames = async (req, res, next) => {
  req.gameArray = await game.find({});
  next();
}

module.exports = findAllGames; 