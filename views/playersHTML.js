const html = require("html-template-tag");

module.exports = (players) => html`<!DOCTYPE html>
	<html>
		<head>
			<title>Roshambo Rock, Paper, Scissors</title>
		</head>
		<body>
			<header>List of Players</header>

			${players.map(
				(player) => html`
					<p>
						<a href="http://localhost:3000/player/${player.id}"
							>${player.userName}</a
						>
					</p>
				`
			)}
		</body>
	</html>`;
