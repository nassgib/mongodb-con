const game = require('../models/game');

const findAllGames = async (req, res, next) => {
  req.gameArray = await game.find({}).populate("categories").populate("users");
  next();
}

module.exports = findAllGames; 