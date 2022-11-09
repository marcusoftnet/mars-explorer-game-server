# Mars Rover Explorer - the server

This is the server part of the Mars Rover Coding challenge.

The purpose of the server is to respond to API requests that the players are doing.

## Use cases

- A user creates a new game
- Player registers in the game
- Player gets starting position, i.e. their homebase
- Game clock is started
- Game ends after 60 minutes
  - When calling the game only returns the result
- Players can get game status
  - Time left
  - Other players score
- Player get to know the 8 squares around him
  - Each square can be
    - Empty
    - Have unobtanium on it, a number between 1-20
    - Is a crater and cannot be moved to
- Player move (`<`, `>`, `^`, `v`) and new 8 squares
- Player can pick up unobtanium from a square
- Player can post new unobtanium in his homebase (starting position)
  - This adds to the users score

## Endpoints

Here are the endpoints the server supports:

- GET `/api` - returns documentation of endpoints
- GET `/api/games/` - returns a list of current games
- POST `/api/games/` - creates a new game
  - Need ADMIN_KEY?
  - Returns game information
    - Game id that others can use to join
    - An array of players and scores
    - Size of board (could be posted)
    - Game time
- `game/{id}` - returns the