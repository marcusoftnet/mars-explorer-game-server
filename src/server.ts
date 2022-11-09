import express, { Express, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Game, RootResponse } from './types';

const app: Express = express();

const apiUrl = (req: Request) => `${req.protocol}://${req.get('host')}/api/`;

const getRootResponse = (req: Request) => {
  const response : RootResponse = {
    description: 'Root of Mars explorer server',
    endpoints: [
      { method: 'GET', URL: `${apiUrl(req)}`, description: 'Returns this list of endpoints' },
    ],
  };
  return response;
};

export const createGame = (adminKey: string) : Game => {
  if (adminKey !== 'MARSROVERROCKS') { throw new Error('Wrong ADMIN key posted'); }

  return { id: uuidv4(), players: [] };
};

app.get('/', (req: Request, res: Response) => res.json(getRootResponse(req)));
app.get('/api/', (req: Request, res: Response) => res.json(getRootResponse(req)));

app.post('/api/games', (req: Request, res: Response) => {
  const game = createGame(req.params.ADMIN_KEY);
  res
    .status(201)
    .setHeader('location', `${apiUrl(req)}/games/${game.id}`)
    .json(game);
});

export default app;
