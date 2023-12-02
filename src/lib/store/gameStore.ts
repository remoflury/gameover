import { scenarios } from "$lib/data/scenarios";
import type { GameStoreProps } from "$lib/types/Types";
import { writable } from "svelte/store";

export const gameStore = writable<GameStoreProps>({
  isPlaying: false,
  currentScenario: null,
  userName: null,
  score: {
    economy: 0,
    environment: 0,
    society: 0,
    health: 0,
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