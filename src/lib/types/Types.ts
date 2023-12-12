export type LeaderboardUsersProps = {
  name: string,
  score: number,
  id?: number
}

export type GameStoreProps = {
  isPlaying: boolean,
  currentScenario: number | null,
  userName: string | null,
  userId: number | null,
  score: ConsequenceProps,
  //index of played scenarios
  playedScenarios: number[],
  //index of played events
  playedEvents: number[]
}

export type EventProps = {
  description: string,
  consequences: ConsequenceProps,
  effect: 'positive' |'negative'
}

export type ConsequenceProps = {
  economy: number,
  environment: number,
  society: number,
  health: number
} 

export type CategoryProps = 'economy' | 'environment' | 'society' | 'health'

export type ScenarioProps = {
  description: string,
  image: string,
  option1: ScenarioOptionProps,
  option2: ScenarioOptionProps,
}

export type ScenarioOptionProps = {
  description: string,
  explanation: string,
  consequences: ConsequenceProps
}

export type ServerAPIResponseProps = {
  status: 200 | 201 | 400 | 401 | 401 | 402 | 403 | 404 | 500,
  message?: string,
  data?: any
}
