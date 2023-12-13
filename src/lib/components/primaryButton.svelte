<script lang="ts">
	import ArrowIcon from '$lib/assets/arrowIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text: string;
	export let ariaLabel: string = '';
	export let title: string = '';
	export let type: 'button' | 'submit' = 'submit';
	export let isTutorial = false;
</script>

<button
	class=" bg-turqoise-dark text-white-soft font-bold rounded-max py-3 px-12 flex gap-x-4 items-center"
	class:bg-opacity-75={isTutorial}
	class:opacity-75={isTutorial}
	{title}
	{type}
	aria-label={ariaLabel}
	on:click={() => dispatch('click')}
>
	<p class="text-white-soft">{text}</p>
	<figure class="w-3" role="presentation">
		<ArrowIcon />
	</figure>
</button>
