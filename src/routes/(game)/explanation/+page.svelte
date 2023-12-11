<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { gameStore, scenarioStore, selectedOption } from '$lib/store/gameStore';
	import { getTotalScore, isGameOver, showToast } from '$lib/utils/generalUtils';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { fade } from 'svelte/transition';

	let isButtonVisible = false;
	// remove current scenario from scenario store
	const removeCurrentScenario = (index: number | null) => {
		if (index === null) return showToast('Error', 'No index provided.', 'error');
		$scenarioStore.splice(index, 1);
		$scenarioStore = [...$scenarioStore];
	};

	const handleNextScenario = (
		economy: number,
		environment: number,
		society: number,
		health: number
	) => {
		// updateGameStore(economy, environment, society, health);
		removeCurrentScenario($gameStore.currentScenario);
		$gameStore.currentScenario = null;
		$selectedOption = undefined;

		if (isGameOver()) goto('/game-over');
		else goto('/scenario');
	};

	const updateGameStore = (
		economy: number,
		environment: number,
		society: number,
		health: number
	) => {
		$gameStore.score.economy += economy;
		$gameStore.score.environment += environment;
		$gameStore.score.society += society;
		$gameStore.score.health += health;
	};

	onMount(() => {
		// if no option is selected or currentScenario is not set, or user is not playing
		if ($gameStore.isPlaying === false || !$selectedOption || $gameStore.currentScenario === null)
			return goto('/scenario');
		// set played scenarios to gamestore, so that total score can be calculated
		if ($gameStore.currentScenario) $gameStore.playedScenarios.push($gameStore.currentScenario);

		// prevent go back
		if (isGameOver()) return goto('/game-over');

		// TODO: if one category score is smaller than 0, redirect to gameover screen?
		setTimeout(() => {
			if ($gameStore.currentScenario === null) return;
			if ($selectedOption === undefined) return;
			const option = $scenarioStore[$gameStore.currentScenario][`option${$selectedOption}`];
			updateGameStore(
				option.consequences.economy,
				option.consequences.environment,
				option.consequences.society,
				option.consequences.health
			);
			isButtonVisible = true;
		}, 1000);
	});

	$: console.log($gameStore.score);
</script>

<section class="container py-block-page">
	<article class="bg-white-soft">
		<h1>Erklärung</h1>
		{#if $selectedOption && $gameStore.currentScenario !== null}
			{@const option = $scenarioStore[$gameStore.currentScenario][`option${$selectedOption}`]}
			{option.explanation}

			<div class="mt-8">
				<p>economy: {option.consequences.economy}</p>
				<p>environment: {option.consequences.environment}</p>
				<p>society: {option.consequences.society}</p>
				<p>health: {option.consequences.health}</p>
			</div>

			<p>Dein aktueller Score: {getTotalScore($gameStore.playedScenarios.length)}</p>
			{#if isButtonVisible}
				<div transition:fade={{ duration: 350 }}>
					<PrimaryButton
						text="Weiter"
						type="button"
						on:click={() =>
							handleNextScenario(
								option.consequences.economy,
								option.consequences.environment,
								option.consequences.society,
								option.consequences.health
							)}
					/>
				</div>
			{/if}
		{/if}
	</article>
</section>
