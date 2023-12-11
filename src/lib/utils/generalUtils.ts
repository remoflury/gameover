import { PUBLIC_POINTS_MULTIPLIER } from "$env/static/public"
import { gameStore } from "$lib/store/gameStore"
// import { gameStore } from "$lib/store/gameStore"
// import type { ConsequenceProps } from "$lib/types/Types"
import { toasts } from "svelte-toasts"
import { get } from "svelte/store"

export const getRandomIndex = <T>(array: T[]): number => {
  return Math.floor(Math.random()*array.length)
}

export const getTotalScore = (number: number) => {
  return Math.floor(number * parseInt(PUBLIC_POINTS_MULTIPLIER)) + 1
}

// export const updateGameScore = (newScores: ConsequenceProps, playedScenario: number) => {
//   console.log('run')
//   gameStore.update(currentStore => {
//     // Create a new object for the updated store
//     return {
//       ...currentStore,
//       playedScenarios: [...currentStore.playedScenarios, playedScenario],
//       score: {
//         economy: currentStore.score.economy + newScores.economy,
//         environment: currentStore.score.environment + newScores.environment,
//         society: currentStore.score.society + newScores.society,
//         health: currentStore.score.health + newScores.health,
//       }
//     };
//   });
// }

export const showToast = (title: string, description: string, type: 'info' | 'success' | 'error' | 'warning', duration: number = 2000) => {
  return toasts.add({
    title,
    description,
    duration, // 0 or negative to avoid auto-remove
    placement: 'top-center',
    type,
    theme: "dark"
    // onClick: () => {},
    // onRemove: () => {}
    // component: BootstrapToast, // allows to override toast component/template per toast
  });
};


export const isGameOver = (): boolean => {
  const gameStoreValue = get(gameStore);

  if (gameStoreValue.score.economy <= 0) return true;
  if (gameStoreValue.score.environment <= 0) return true;
  if (gameStoreValue.score.society <= 0) return true;
  if (gameStoreValue.score.health <= 0) return true;

  return false;
};