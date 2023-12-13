import { scenarios } from "$lib/data/scenarios";
import type { GameStoreProps } from "$lib/types/Types";
import { initialScore } from "$lib/utils/generalVariables";
import { writable } from "svelte/store";


export const gameStore = writable<GameStoreProps>({
  isPlaying: false,
  currentScenario: null,
  userName: null,
  userId: null,
  score: {
    economy: initialScore,
    environment: initialScore,
    society: initialScore,
    health: initialScore,
  },
  playedScenarios: [],
  playedEvents: []
})

export const scenarioStore = writable([...scenarios])

export const selectedOption = writable<1 | 2 | undefined>(undefined)

// if scenario store is empty, reset store with all scenarios
scenarioStore.subscribe($scenarioStore => {
  if ($scenarioStore.length === 0) {
    scenarioStore.set([...scenarios]);
  }
});

export const showTutorial = writable(false)