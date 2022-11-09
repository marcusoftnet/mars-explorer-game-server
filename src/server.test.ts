import 'mocha';
import assert from 'assert';
import { createGame } from './server';

describe('create new game', () => {
  const ADMIN_KEY = 'MARSROVERROCKS';
  it('a game is created', () => {
    // act
    const game = createGame(ADMIN_KEY);

    // assert
    assert.notStrictEqual(game, undefined);
  });

  it('a new game has empty list of players', () => {
    // act
    const game = createGame(ADMIN_KEY);

    // assert
    assert.equal(game.players.length, 0);
  });

  it('throws for wrong admin key', () => {
    // act and assert
    assert.throws(() => {
      createGame('');
    }, Error);
  });
});
