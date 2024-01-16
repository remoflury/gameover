<script lang="ts">
	import { gameStore } from '$lib/store/gameStore';
	import { getTotalScore } from '$lib/utils/generalUtils';
	import StarIcon from '$lib/assets/starIcon.svelte';

	export let isTutorial = false;
</script>

<div class="flex justify-center items-center gap-x-4">
	<figure
		class="w-[26px] aspect-square rounded-max overflow-hidden bg-gray p-[6px]"
		class:opacity-40={isTutorial}
	>
		<StarIcon />
	</figure>

	<p class="font-bold">
		Dein aktueller Score: {getTotalScore($gameStore.playedScenarios.length)}
	</p>
</div>
