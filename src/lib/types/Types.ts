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
  id: number,
  title: string,
  description: string,
  consequences: ConsequenceProps,
  effect: EventEffectProps,
  image: string,
}

export type EventEffectProps = 'positive' |'negative'

export type ConsequenceProps = {
  economy: number,
  environment: number,
  society: number,
  health: number
} 

export type CategoryProps = 'economy' | 'environment' | 'society' | 'health'

export type ScenarioProps = {
  title: string,
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

export type GameOverTextProps = {
  [key in keyof ConsequenceProps]: string
}

export type CurrentEventProps = {
  index: number | null;
  event: EventProps | null
}