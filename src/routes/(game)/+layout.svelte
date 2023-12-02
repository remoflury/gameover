<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';
</script>

<article class="flex gap-x-2 justify-between container pt-block-page">
	<div class="flex flex-col gap-y-1 items-center">
		<p>economy</p>
		<p>{$gameStore.score.economy}</p>
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>environment</p>
		<p>{$gameStore.score.environment}</p>
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>society</p>
		<p>{$gameStore.score.society}</p>
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>health</p>
		<p>{$gameStore.score.health}</p>
	</div>
</article>

<slot />
