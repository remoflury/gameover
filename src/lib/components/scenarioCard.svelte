<script lang="ts">
	import { fade } from 'svelte/transition';

	export let description: string;

	export let isTutorial = false;
</script>

<article class="rounded-card overflow-hidden bg-white-soft relative">
	{#if isTutorial}
		<span
			transition:fade={{ duration: 350 }}
			class="block absolute inset-0 z-10 bg-black-plain bg-opacity-75"
		></span>
	{/if}
	<figure>
		<img src="/assets/tutorial.jpg" alt="" />
	</figure>
	<div class="p-6">
		<h1 class="text-center">Szenario</h1>
		<p class="text-center">{description}</p>
	</div>
</article>
