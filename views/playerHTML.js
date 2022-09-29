const html = require("html-template-tag");

module.exports = (player, games) => html`<!DOCTYPE html>
	<html>
		<head>
			<title>${player.userName}</title>
		</head>
		<body>
			<header>${player.userName}'s games:</header>

			${games.map(
				(game) => html`
					<p>${game.id}</p>
					<p>Result: ${game.result}</p>
				`
			)}
		</body>
	</html>`;
