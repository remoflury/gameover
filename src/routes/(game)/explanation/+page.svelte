<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { gameStore, scenarioStore, selectedOption } from '$lib/store/gameStore';
	import { isGameOver, showToast, updateGameStore } from '$lib/utils/generalUtils';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import ExplanationCard from '$lib/components/explanationCard.svelte';
	import OpenTutorialButton from '$lib/components/openTutorialButton.svelte';

	let isButtonVisible = false;
	// remove current scenario from scenario store
	const removeCurrentScenario = (index: number | null) => {
		if (index === null) return showToast('Error', 'No index provided.', 'error');
		$scenarioStore.splice(index, 1);
		$scenarioStore = [...$scenarioStore];
	};

	const handleNextScenario = () => {
		// updateGameStore(economy, environment, society, health);
		removeCurrentScenario($gameStore.currentScenario);
		$gameStore.currentScenario = null;
		$selectedOption = undefined;

		if (isGameOver()) goto('/game-over');
		else goto('/scenario');
	};

	onMount(() => {
		// if no option is selected or currentScenario is not set, or user is not playing
		if ($gameStore.isPlaying === false || !$selectedOption || $gameStore.currentScenario === null)
			return goto('/scenario');
		// set played scenarios to gamestore, so that total score can be calculated
		if ($gameStore.currentScenario !== null)
			$gameStore.playedScenarios.push($gameStore.currentScenario);

		// prevent go back
		if (isGameOver()) return goto('/game-over');

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
</script>

<section class="container py-block-page">
	{#if $selectedOption && $gameStore.currentScenario !== null}
		{@const option = $scenarioStore[$gameStore.currentScenario][`option${$selectedOption}`]}
		<ExplanationCard
			explanation={option.explanation}
			economy={option.consequences.economy}
			environment={option.consequences.environment}
			society={option.consequences.society}
			health={option.consequences.health}
		/>

		{#if isButtonVisible}
			<div class="flex justify-end mt-4" transition:fade={{ duration: 350 }}>
				<PrimaryButton text="Weiter" type="button" on:click={() => handleNextScenario()} />
			</div>
		{/if}
	{/if}

	<OpenTutorialButton />
</section>
