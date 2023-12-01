<script lang="ts">
	import { createAccordionContext, getAccordionContext } from '$lib/store/accordionStore';
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let description: string;

	let isOpen = false;
	const dispatch = createEventDispatcher();

	// allows only one accordion to be open at a time
	const { current } = getAccordionContext();
	const currentKey = {}; // Object representing current accordion component

	createAccordionContext(); // Context for children

	function handleClick() {
		isOpen = !isOpen;
		if (isOpen) $current = currentKey;
		dispatch('selected');
	}

	$: if ($current != currentKey) isOpen = false;
</script>

<article>
	<button
		class="max-h-12 flex gap-x-4 items-start border border-white-soft transition"
		class:max-h-none={isOpen}
		class:bg-white-soft={isOpen}
		on:click={handleClick}
	>
		{#if !isOpen}
			<p class="text-left line-clamp-2">
				{description}
			</p>
		{:else}
			<p class="text-left" in:slide={{ duration: 250 }}>{description}</p>
		{/if}

		<p class="-rotate-90 transition" class:!rotate-90={isOpen}>></p>
	</button>
</article>
