<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';
	import { category100PercentValue } from '$lib/utils/generalVariables';

	import EconomyIconMask from '$lib/assets/category/economyIconMask.svelte';
	import CategoryScoreIcon from './categoryScoreIcon.svelte';

	console.log('economy ', $gameStore.score.economy);
	console.log('max score ', category100PercentValue);
</script>

<article class="flex gap-x-2 justify-evenly container pt-block-page">
	<CategoryScoreIcon category="economy" currentScore={$gameStore.score.economy} />
	<CategoryScoreIcon category="environment" currentScore={$gameStore.score.environment} />
	<CategoryScoreIcon category="society" currentScore={$gameStore.score.society} />
	<CategoryScoreIcon category="health" currentScore={$gameStore.score.health} />
</article>
