const Sequelize = require("sequelize");
const DB_URL = process.env.DB_URL || "postgres://localhost:5432/roshambo";
const db = new Sequelize(DB_URL);

const createPlayer = async (user) => {
	//insert new players into our database
	const Player = db.define("user", {
		userName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});
};

const Player = db.define("user", {
	userName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

const Game = db.define("game", {
	result: {
		type: Sequelize.ENUM(["computer", "human", "tie"]),
	},
});

Player.hasMany(Game);
Game.belongsTo(Player);
//utilize through table?

module.exports = {
	db,
	Player,
	Game,
	createPlayer,
};
