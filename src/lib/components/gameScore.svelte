<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';

	import CategoryScoreIcon from './categoryScoreIcon.svelte';
</script>

<article class="flex gap-x-2 justify-evenly container pt-block-page">
	<CategoryScoreIcon category="economy" currentScore={$gameStore.score.economy} />
	<CategoryScoreIcon category="environment" currentScore={$gameStore.score.environment} />
	<CategoryScoreIcon category="society" currentScore={$gameStore.score.society} />
	<CategoryScoreIcon category="health" currentScore={$gameStore.score.health} />
</article>
