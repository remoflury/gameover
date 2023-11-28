import type { GameStoreProps } from "$lib/types/Types";
import { writable } from "svelte/store";

export const gameStore = writable<GameStoreProps>({
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

export const showTutorial = writable(false)