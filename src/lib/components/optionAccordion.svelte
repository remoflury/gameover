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
		class="flex gap-x-4 items-start border border-white-soft transition"
		class:bg-white-soft={isOpen}
		on:click={handleClick}
	>
		<div class="transition-all duration-700 overflow-hidden">
			<p class={`text-left ${isOpen ? '' : 'line-clamp-2'}`}>
				{description}
			</p>
		</div>

		<p class={`-rotate-90 transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}>></p>
	</button>
</article>
