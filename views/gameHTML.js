const html = require("html-template-tag");

module.exports = (games) => html`<!DOCTYPE html>
	<html>
		<head>
			<title>Roshambo Rock, Paper, Scissors</title>
		</head>
		<body>
			<header>Games list:</header>

			<ul>
				${games.map((game) => game.result).join(", ")}
			</ul>
		</body>
	</html>`;

//<p>${games.result}</p>
//<p>${player.userName}</p>
