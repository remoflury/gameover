export type LeaderboardUsersProps = {
  name: string,
  score: number
}

export type GameStoreProps = {
  currentScenario: number | null,
  userName: string | null,
  score: {
      economy: number,
      environment: number,
      society: number,
      health: number,
  },
  //index of played scenarios
  playedScenarios: number[],
  //index of played events
  playedEvents: number[]
}

export type EventProps = {
  description: string,
  consequences: {
    economy: number,
    environment: number,
    society: number,
    health: number
  },
  effect: 'positive' |'negative'
}