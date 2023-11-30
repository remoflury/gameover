<script lang="ts">
	import OptionAccordion from '$lib/components/optionAccordion.svelte';
	import ScenarioCard from '$lib/components/scenarioCard.svelte';
	import { createAccordionContext } from '$lib/store/accordionStore';
	import { scenarioStore } from '$lib/store/gameStore';
	import type { ScenarioProps } from '$lib/types/Types';
	import { getRandomIndex } from '$lib/utils/generalUtils';

	const getCurrentScenario = (): ScenarioProps => {
		const randomIndex = getRandomIndex($scenarioStore);
		const currentScenario = $scenarioStore[randomIndex];
		$scenarioStore.splice(randomIndex, 1);
		return currentScenario;
	};

	const currentScenario = getCurrentScenario();
	// const up

	createAccordionContext();

	$: console.log($scenarioStore);
</script>

<section class="container py-block-page">
	{#if currentScenario}
		<ScenarioCard description={currentScenario.description} />
		<OptionAccordion description={currentScenario.option1.description} />
		<OptionAccordion description={currentScenario.option2.description} />
	{/if}
</section>
