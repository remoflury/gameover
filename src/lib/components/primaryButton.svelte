<script lang="ts">
	import type { PrimaryButtonProps } from '$lib/types/Content';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let buttonProps: PrimaryButtonProps;
</script>

<button
	class="bg-yellow-dirty text-black-plain py-2 px-4"
	title={buttonProps.title}
	aria-label={buttonProps.ariaLabel}
	on:click={() => dispatch('click')}
>
	<p>{buttonProps.text}</p>
</button>
