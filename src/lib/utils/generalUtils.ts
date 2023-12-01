import { PUBLIC_POINTS_MULTIPLIER } from "$env/static/public"
import { gameStore } from "$lib/store/gameStore"
import type { ConsequenceProps } from "$lib/types/Types"

export const getRandomIndex = <T>(array: T[]): number => {
  return Math.floor(Math.random()*array.length)
}

export const getTotalScore = (number: number) => {
  return Math.floor(number * parseInt(PUBLIC_POINTS_MULTIPLIER)) + 1
}

export const updateGameScore = (newScores: ConsequenceProps, playedScenario: number) => {
  gameStore.update(currentStore => {
    // Create a new object for the updated store
    return {
      ...currentStore,
      playedScenarios: [...currentStore.playedScenarios, playedScenario],
      score: {
        economy: currentStore.score.economy + newScores.economy,
        environment: currentStore.score.environment + newScores.environment,
        society: currentStore.score.society + newScores.society,
        health: currentStore.score.health + newScores.health,
      }
    };
  });
}
