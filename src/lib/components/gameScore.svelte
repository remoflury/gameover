<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';
	import { fly, slide } from 'svelte/transition';
</script>

<article class="flex gap-x-2 justify-between container pt-block-page">
	<div class="flex flex-col gap-y-1 items-center">
		<p>economy</p>
		{#key $gameStore.score.economy}
			<p out:fly={{ y: -10, duration: 250 }} in:fly={{ y: 10, duration: 250, delay: 250 }}>
				{$gameStore.score.economy}
			</p>
		{/key}
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>environment</p>
		{#key $gameStore.score.environment}
			<p out:fly={{ y: -10, duration: 250 }} in:fly={{ y: 10, duration: 250, delay: 250 }}>
				{$gameStore.score.environment}
			</p>
		{/key}
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>society</p>
		{#key $gameStore.score.society}
			<p out:fly={{ y: -10, duration: 250 }} in:fly={{ y: 10, duration: 250, delay: 250 }}>
				{$gameStore.score.society}
			</p>
		{/key}
	</div>
	<div class="flex flex-col gap-y-1 items-center">
		<p>health</p>
		{#key $gameStore.score.health}
			<p out:fly={{ y: -10, duration: 250 }} in:fly={{ y: 10, duration: 250, delay: 250 }}>
				{$gameStore.score.health}
			</p>
		{/key}
	</div>
</article>
