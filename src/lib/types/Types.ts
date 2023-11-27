export type LeaderboardUsersProps = {
  name: string,
  score: number
}

export type GameStoreProps = {
  currentScenario: number | undefined,
  userName: string | undefined,
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