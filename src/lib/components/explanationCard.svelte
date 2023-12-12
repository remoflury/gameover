<script lang="ts">
	import EffectCategory from './categories/effectCategory.svelte';
	import CurrentScore from './currentScore.svelte';

	export let explanation: string;

	export let economy: number;
	export let environment: number;
	export let society: number;
	export let health: number;
</script>

<article class="rounded-card bg-white-soft p-6 overflow-hidden">
	<h1 class="text-center">Erklärung</h1>
	<p class="text-center">{explanation}</p>
	<div class="my-8 grid grid-cols-2 gap-8 px-6">
		<EffectCategory type="economy" effect={economy} />
		<EffectCategory type="environment" effect={environment} />
		<EffectCategory type="society" effect={society} />
		<EffectCategory type="health" effect={health} />
	</div>
	<CurrentScore />
</article>
