This weekend I want you all to attempt making a Roshambo API (Rock-Paper-Scissors). The actual gameplay route is extra credit because this has a lot packed into it, but I think it's doable
Because this one has a bit more going on than usual lets aim to have this in before next Thursdays class - take a couple of extra days to ask questions if needed :slightly_smiling_face:

Weekend Assignment:
[ x] Create a table using Sequelize, including:
Games
Result: A string that's either "computer", "human", or "tie"
Every game has one human player
Player
username: A string representing a players name / username
Every player has many games
[x ] Create a seed for the above table
[ ] Create an express server, including the routes:
GET /game/:gameId
Returns the winner for the game matching the given ID as well as the player for the game
GET /player
Returns a list of all players
GET /player/:playerId
Returns a specific player, along with their games played
PUT /player/:playerId
Body:
username: string representing a username
Updates a players name to be the given name
HINT: use Postman to test this out
EXTRA CREDIT: POST /game
Body:
symbol: A players chosen move - either "rock", "paper", or "scissors"
playerId: the ID of the player playing the game
Does the following:
Pick a random symbol using javascript for the computer
Compare randomly selected move to the users move
Scissors beats paper
Paper beats Rock
Rock beats Scissors
Create a game with the resulting winner
Send the result to the client

Submit to: https://forms.gle/4MJMzVrEJEu3JxfE9
