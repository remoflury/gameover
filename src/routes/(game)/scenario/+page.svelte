<script lang="ts">
	import type { EventEffectProps, ScenarioProps } from '$lib/types/Types';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { createAccordionContext } from '$lib/store/accordionStore';
	import {
		currentEvent,
		eventsStore,
		gameScore,
		gameStore,
		scenarioStore,
		selectedOption,
		showEvent,
		showTutorial
	} from '$lib/store/gameStore';
	import { getRandomIndex, isGameOver } from '$lib/utils/generalUtils';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import ScenarioCard from '$lib/components/scenarioCard.svelte';
	import { onMount } from 'svelte';
	import OptionCard from '$lib/components/optionCard.svelte';
	import {
		eventThreshholdForNegativeEvent,
		eventThreshholdForPositiveEvent,
		eventsAfterRounds,
		eventsChance
	} from '$lib/utils/generalVariables';
	import OpenTutorialButton from '$lib/components/openTutorialButton.svelte';

	let randomIndex: number;
	let currentScenario: ScenarioProps;

	const newRound = () => {
		randomIndex = getRandomIndex($scenarioStore);
		$gameStore.currentScenario = randomIndex;
		// $gameStore.playedScenarios.push(randomIndex);
		currentScenario = $scenarioStore[randomIndex];

		// if the count of played scenarios exceeds a certain count of rounds,
		// check if a event is needed
		if ($gameStore.playedScenarios.length >= eventsAfterRounds) {
			// chance fo 50% for an event
			if (Math.random() < eventsChance) return;

			loadEvent();
		}
	};

	const handleSelection = (option: 1 | 2) => {
		// function, to prevent clicking twice on the same option, without resetting the logic behind it
		if ($selectedOption === option) return ($selectedOption = undefined);
		return ($selectedOption = option);
	};

	const loadEvent = () => {
		const randomIndex = getRandomIndex($eventsStore);
		$currentEvent.index = $eventsStore[randomIndex].id;
		$currentEvent.event = $eventsStore[randomIndex];
		$showEvent = true;
	};

	const handleChoose = () => {
		goto('/explanation');
	};

	// function, to only be able to open one accordion at a time
	createAccordionContext();
	onMount(() => {
		if ($gameStore.isPlaying === false) return goto('/');
		if (isGameOver()) return goto('/game-over');
		newRound();
	});
</script>

<section
	class="container gap-y-4 py-block-page"
	class:bg-black-plain={$showTutorial}
	class:-mt-8={$gameScore.height}
>
	{#if currentScenario}
		<ScenarioCard
			description={currentScenario.description}
			title={currentScenario.title}
			img={currentScenario.image}
		/>
		<OptionCard text={currentScenario.option1.description} on:selected={() => handleSelection(1)} />
		<OptionCard text={currentScenario.option2.description} on:selected={() => handleSelection(2)} />
		{#if $selectedOption}
			<div class="flex justify-end" transition:fade={{ duration: 250, easing: cubicInOut }}>
				<PrimaryButton text="Weiter" type="button" on:click={handleChoose} />
			</div>
		{/if}
	{/if}
	<!-- <OpenTutorialButton /> -->
</section>
