<script lang="ts">
	import { gameScore } from '$lib/store/gameStore';
	import { fade } from 'svelte/transition';

	export let description: string;
	export let title: string;
	export let img: string;

	export let isTutorial = false;
</script>

<article
	class="rounded-card overflow-hidden bg-white-soft relative"
	style={`margin-top: ${$gameScore.height}px`}
>
	{#if isTutorial}
		<span
			transition:fade={{ duration: 350 }}
			class="block absolute inset-0 z-10 bg-black-plain bg-opacity-75"
		></span>
	{/if}
	<figure class="aspect-video overflow-hidden">
		<img
			class="object-cover object-center w-full h-full"
			src="/assets/scenario/{img}"
			alt="Illustration des Szenarios {title}"
		/>
	</figure>
	<div class="p-6">
		<h1 class="text-center">{title}</h1>
		<p class="text-center">{description}</p>
	</div>
</article>
