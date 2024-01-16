<script lang="ts">
	import { gameStore, showTutorial } from '$lib/store/gameStore';
	import CategoryScoreIcon from './categoryScoreIcon.svelte';
	import { gameScore } from '$lib/store/gameStore';
	import { onMount } from 'svelte';

	let elem: HTMLElement;
	let scrollY: number;

	onMount(() => setGameScoreStore());

	const setGameScoreStore = () => {
		$gameScore.height = elem.clientHeight;
		$gameScore.scrollY = scrollY;
	};
</script>

<svelte:window bind:scrollY on:scroll={setGameScoreStore} />
<article
	bind:this={elem}
	class="flex gap-x-2 justify-evenly container py-block-page fixed z-50 bg-white-plain transition-shadow"
	class:shadow-game-score={scrollY}
	class:!-z-[100]={$showTutorial}
>
	<CategoryScoreIcon category="economy" currentScore={$gameStore.score.economy} />
	<CategoryScoreIcon category="environment" currentScore={$gameStore.score.environment} />
	<CategoryScoreIcon category="society" currentScore={$gameStore.score.society} />
	<CategoryScoreIcon category="health" currentScore={$gameStore.score.health} />
</article>
