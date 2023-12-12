<script lang="ts">
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { gameStore } from '$lib/store/gameStore';
	import type { ConsequenceProps, ServerAPIResponseProps } from '$lib/types/Types';
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

		if (data.status >= 400) console.error(data.message);
	};

	const getGameOverImage = () => {
		// score = get(gameStore).score; // Get the current value of the store

		// Initialize with a high value and an empty property name
		let lowestValue = Number.MAX_VALUE;
		let lowestProp: ConsequenceProps;

		// Loop through each property in the score object
		for (const prop in $gameStore.score) {
			if ($gameStore.score[prop] < lowestValue) {
				lowestValue = $gameStore.score[prop];
				lowestProp = prop;
			}
		}

		return lowestProp;
	};

	console.log(getGameOverImage());
	onMount(async () => {
		// if ($gameStore.isPlaying === false) return goto('/');
		await writeResultToDB();
	});
</script>

<section class="">
	<figure class="aspect-4/3 overflow-hidden">
		<!-- <img src= alt=""> -->
	</figure>
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
