<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';
	import { getTotalScore } from '$lib/utils/generalUtils';
	import StarIcon from '$lib/assets/starIcon.svelte';
	import { onMount } from 'svelte';

	let pElem: HTMLParagraphElement;
	let pElemHeight = 0;

	onMount(() => (pElemHeight = pElem.clientHeight));
</script>

<div class="flex justify-center items-center gap-x-4">
	<figure
		class="w-[26px] aspect-square rounded-max overflow-hidden bg-gray p-[6px] grid place-content-center"
	>
		<StarIcon />
	</figure>

	<p class="font-bold" bind:this={pElem}>
		Dein aktueller Score: {getTotalScore($gameStore.playedScenarios.length)}
	</p>
</div>
