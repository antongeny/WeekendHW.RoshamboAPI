const { db, Player, Game } = require("./db");

const seedDB = async () => {
	await db.sync({ force: true, logging: false });

	const anton = await Player.create({
		userName: "Anton",
	});
	const kafka = await Player.create({
		userName: "Kafka",
	});
	const toshi = await Player.create({
		userName: "Toshi",
	});

	await Game.create({
		result: "tie",
		userId: anton.id,
	});
	await Game.create({
		result: "computer",
		userId: anton.id,
	});
	await Game.create({
		result: "computer",
		userId: kafka.id,
	});
	await Game.create({
		result: "human",
		userId: kafka.id,
	});
	await Game.create({
		result: "human",
		userId: toshi.id,
	});
	await Game.create({
		result: "tie",
		userId: toshi.id,
	});

	//console.log((await Game.findAll()).map((game) => game.result));
	//console.log((await Player.findAll()).map((player) => player.userName));
};

seedDB();
