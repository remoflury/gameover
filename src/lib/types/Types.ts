export type LeaderboardUsersProps = {
  name: string,
  score: number
}

export type GameStoreProps = {
  currentScenario: number | null,
  userName: string | null,
  score: {
    total: number,
    categories: {
      economy: number,
      environment: number,
      society: number,
      health: number,
    }
  },
  //index of played scenarios
  playedScenarios: number[],
  //index of played events
  playedEvents: number[]
}

export type EventProps = {
  description: string,
  effect: {
    economy: number,
    environment: number,
    society: number,
    health: number
  },
  effect: 'positive' |'negative'
}