const express = require("express");
const app = express();

const gameIdHTML = require("./views/gameIdHTML");
const gameHTML = require("./views/gameHTML");
const playerHTML = require("./views/playerHTML");
const playersHTML = require("./views/playersHTML");

const { Player, Game, createPlayer } = require("./db");

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
	const games = await Game.findAll();
	const players = await Player.findAll();
	res.redirect("/game");
});

app.get("/player", async (req, res, next) => {
	try {
		const players = await Player.findAll();

		res.send(playersHTML(players));
	} catch (err) {
		next(err);
	}
});

app.get("/player/:playerId", async (req, res, next) => {
	try {
		const playerId = +req.params.playerId;
		const player = await Player.findByPk(playerId);
		const games = await Game.findAll({
			where: { userId: playerId },
		});

		res.send(playerHTML(player, games));
	} catch (err) {
		next(err);
	}
});

app.put("/player/:playerId", async (req, res, next) => {
	console.log(req.body);
	const player = await Player.findByPk(+req.params.playerId);
	const newPlayer = await player.update(req.body);

	res.send(newPlayer);
});

app.get("/game", async (req, res, next) => {
	try {
		const games = await Game.findAll();

		res.send(gameHTML(games));
	} catch (err) {
		next(err);
	}
});
app.get("/game/:gameId", async (req, res, next) => {
	try {
		const gameId = +req.params.gameId;
		const game = await Game.findByPk(gameId);
		const userId = game.userId;
		const player = await Player.findByPk(userId);

		res.send(gameIdHTML(game, player));
	} catch (err) {
		next(err);
	}
});

// app.put('/player', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

const PORT = 3000;
app.listen(PORT, (test) => {
	console.log(`Connected to: http://localhost:${PORT}`);
});

// const PORT = 3000;
// app.listen(PORT, () => {
// 	console.log(`Connected to PORT: ${PORT} at http://localhost:3000/game/1`);
// });
