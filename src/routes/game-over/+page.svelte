<script lang="ts">
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { gameStore } from '$lib/store/gameStore';
	import type { ServerAPIResponseProps } from '$lib/types/Types';
	import { getTotalScore } from '$lib/utils/generalUtils';
	import { serverErrMessage } from '$lib/utils/generalVariables';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let totalScore: number;

	const writeResultToDB = async () => {
		totalScore = getTotalScore($gameStore.playedScenarios.length);
		console.log($gameStore.userId);
		const response = await fetch(`/api/gameover?score=${totalScore}&userid=${$gameStore.userId}`);
		const data: ServerAPIResponseProps = await response.json();

		if (data.status >= 400) console.error();
	};

	onMount(async () => {
		if ($gameStore.isPlaying === false) return goto('/');
		await writeResultToDB();
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
		<p>Dein Score: {totalScore}</p>
		<PrimaryButton text="Zum Leaderboard" on:click={() => goto('/leaderboard')} />
	</article>
</section>
