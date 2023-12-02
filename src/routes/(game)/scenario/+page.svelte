<script lang="ts">
	import type { ScenarioProps } from '$lib/types/Types';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { createAccordionContext } from '$lib/store/accordionStore';
	import { gameStore, scenarioStore, selectedOption } from '$lib/store/gameStore';
	import { getRandomIndex } from '$lib/utils/generalUtils';
	import OptionAccordion from '$lib/components/optionAccordion.svelte';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import ScenarioCard from '$lib/components/scenarioCard.svelte';
	import { onMount } from 'svelte';

	let randomIndex: number;
	let currentScenario: ScenarioProps;

	const newRound = () => {
		randomIndex = getRandomIndex($scenarioStore);
		$gameStore.currentScenario = randomIndex;
		currentScenario = $scenarioStore[randomIndex];
	};

	const handleChoose = () => {
		goto('/explanation');
	};

	// function, to only be able to open one accordion at a time
	createAccordionContext();
	onMount(() => {
		if ($gameStore.isPlaying === false) goto('/');
		newRound();
	});
</script>

<section class="container py-block-page">
	{#if currentScenario}
		<ScenarioCard description={currentScenario.description} />
		<OptionAccordion
			description={currentScenario.option1.description}
			on:selected={() => ($selectedOption = 1)}
		/>
		<OptionAccordion
			description={currentScenario.option2.description}
			on:selected={() => ($selectedOption = 2)}
		/>
		{#if $selectedOption}
			<div transition:fade={{ duration: 250, easing: cubicInOut }}>
				<PrimaryButton buttonProps={{ text: 'Auswählen' }} on:click={handleChoose} />
			</div>
		{/if}
	{/if}
</section>
