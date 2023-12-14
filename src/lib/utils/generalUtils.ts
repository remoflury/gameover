import { PUBLIC_POINTS_MULTIPLIER } from "$env/static/public"
import { gameStore } from "$lib/store/gameStore"
// import { gameStore } from "$lib/store/gameStore"
// import type { ConsequenceProps } from "$lib/types/Types"
import { toasts } from "svelte-toasts"
import { get } from "svelte/store"
import { category100PercentValue } from "./generalVariables"

export const getRandomIndex = <T>(array: T[]): number => {
  return Math.floor(Math.random()*array.length)
}

export const getTotalScore = (number: number) => {
  return Math.floor(number * parseInt(PUBLIC_POINTS_MULTIPLIER)) + 1
}

export const cutOffIfOverMaxValue = (
  inputValue: number,
  consequenceValue: number,
  maxValue: number
): number => {
  if (inputValue + consequenceValue >= maxValue) return maxValue;
  return inputValue + consequenceValue;
};

export const updateGameStore = (
  economy: number,
  environment: number,
  society: number,
  health: number
) => {
  gameStore.update($gameStore => {
    $gameStore.score.economy = cutOffIfOverMaxValue(
        $gameStore.score.economy,
        economy,
        category100PercentValue
    );
    $gameStore.score.environment = cutOffIfOverMaxValue(
        $gameStore.score.environment,
        environment,
        category100PercentValue
    );
    $gameStore.score.society = cutOffIfOverMaxValue(
        $gameStore.score.society,
        society,
        category100PercentValue
    );
    $gameStore.score.health = cutOffIfOverMaxValue(
        $gameStore.score.health,
        health,
        category100PercentValue
    );
    return $gameStore;
});
  // $gameStore.score.economy = cutOffIfOverMaxValue(
  //   $gameStore.score.economy,
  //   economy,
  //   category100PercentValue
  // );
  // $gameStore.score.environment = cutOffIfOverMaxValue(
  //   $gameStore.score.environment,
  //   environment,
  //   category100PercentValue
  // );
  // $gameStore.score.society = cutOffIfOverMaxValue(
  //   $gameStore.score.society,
  //   society,
  //   category100PercentValue
  // );
  // $gameStore.score.health = cutOffIfOverMaxValue(
  //   $gameStore.score.health,
  //   health,
  //   category100PercentValue
  // );
};

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