const { getAllGames, deleteGame } = require("../controllers/games");

// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер


gamesRouter.get("/games", getAllGames)
gamesRouter.delete("/games/:id", deleteGame);

module.exports = gamesRouter;
