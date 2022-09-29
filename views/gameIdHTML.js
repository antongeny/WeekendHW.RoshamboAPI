const html = require("html-template-tag");

module.exports = (games, player) => html`<!DOCTYPE html>
	<html>
		<head>
			<title>Roshambo Rock, Paper, Scissors</title>
		</head>
		<body>
			<header>Game Results</header>

			<p>Player ${games.id}</p>
			<p>${games.result}</p>
			<p>${player.userName}</p>
		</body>
	</html>`;

//${games.map((game) => game.result).join(", ")}
