<script lang="ts">
	import { goto } from '$app/navigation';
	import { gameStore } from '$lib/store/gameStore';
	import { getTotalScore } from '$lib/utils/generalUtils';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($gameStore.isPlaying === false) goto('/');
	});
</script>

<section class="container py-block-page">
	<article>
		<h1>GameOver!</h1>
		<p>{$gameStore.userName}, leider hast du verloren...</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt maiores nemo libero
			cupiditate aliquid autem maxime similique architecto minus!
		</p>
		<p>Dein Score: {getTotalScore($gameStore.playedScenarios.length)}</p>
	</article>
</section>
