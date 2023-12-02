<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { gameStore, scenarioStore, selectedOption } from '$lib/store/gameStore';
	import { getTotalScore, updateGameScore } from '$lib/utils/generalUtils';
	import PrimaryButton from '$lib/components/primaryButton.svelte';

	// remove current scenario from scenario store
	const removeCurrentScenario = (index: number | null) => {
		if (index === null) return alert('No index provided.');
		$scenarioStore.splice(index, 1);
		$scenarioStore = [...$scenarioStore];
	};

	const handleNextScenario = () => {
		removeCurrentScenario($gameStore.currentScenario);
		$gameStore.currentScenario = null;
		$selectedOption = undefined;
		goto('/scenario');
	};

	onMount(() => {
		// if no option is selected or currentScenario is not set
		if (!$selectedOption || $gameStore.currentScenario === null) return goto('/scenario');

		// TODO: if one category score is smaller than 0, redirect to gameover screen?

		updateGameScore(
			$scenarioStore[$gameStore.currentScenario][`option${$selectedOption}`].consequences,
			$gameStore.currentScenario
		);
	});
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
			<PrimaryButton buttonProps={{ text: 'Weiter' }} on:click={handleNextScenario} />
		{/if}
	</article>
</section>
