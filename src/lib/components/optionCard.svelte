<script lang="ts">
	import { createAccordionContext, getAccordionContext } from '$lib/store/accordionStore';
	import { createEventDispatcher } from 'svelte';

	export let text: string;
	let isSelected = false;

	const dispatch = createEventDispatcher();

	// allows only one accordion to be open at a time
	const { current } = getAccordionContext();
	const currentKey = {}; // Object representing current accordion component

	createAccordionContext(); // Context for children

	function handleClick() {
		isSelected = !isSelected;
		if (isSelected) $current = currentKey;
		dispatch('selected');
	}

	$: if ($current != currentKey) isSelected = false;
</script>

<button
	aria-label="Szenario auswählen"
	class="transition p-6 border border-gray rounded-card relative outline-none outline-offset-0 bg-white-soft"
	class:border-turqoise-dark={isSelected}
	class:outline-turqoise-dark={isSelected}
	class:z-10={isSelected}
	on:click={handleClick}
>
	<p class="text-left">{text}</p>
</button>
