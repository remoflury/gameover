<script lang="ts">
	import { gameScore } from '$lib/store/gameStore';
	import LightBulb from '$lib/assets/lightBulb.svelte';
	import EffectCategory from './categories/effectCategory.svelte';
	import CurrentScore from './currentScore.svelte';

	export let explanation: string;

	export let economy: number;
	export let environment: number;
	export let society: number;
	export let health: number;
	export let isTutorial = false;
</script>

<article
	class="rounded-card p-6 overflow-hidden"
	class:bg-black-plain={isTutorial}
	class:bg-opacity-5={isTutorial}
	class:bg-white-soft={!isTutorial}
	style={`margin-top: ${$gameScore.height}px`}
>
	<div class="max-w-[3rem] flex justify-center mb-8 mx-auto" class:opacity-40={isTutorial}>
		<LightBulb />
	</div>
	<h1 class="text-center">Erklärung</h1>
	<p class="text-center">{explanation}</p>
	<div class="my-8 grid grid-cols-2 gap-8 px-6">
		<EffectCategory type="economy" effect={economy} />
		<EffectCategory type="environment" effect={environment} />
		<EffectCategory type="society" effect={society} />
		<EffectCategory type="health" effect={health} />
	</div>
	<CurrentScore {isTutorial} />
</article>
