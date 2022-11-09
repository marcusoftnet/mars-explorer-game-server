export type RootResponse = {
  description: string,
  endpoints: Endpoint[];
};

export type EndpointDescription = {
  method: string,
  URL: string,
  description: string
};

export type Game = {
  id: string,
  players: Player[]
};

export type Player = {
  id: string,
  gameId: number,
  name: string,
  score: number,
};
