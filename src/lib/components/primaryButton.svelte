<script lang="ts">
	// import type { PrimaryButtonProps } from '$lib/types/Content';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// export let buttonProps: PrimaryButtonProps;
	export let text: string;
	export let ariaLabel: string = '';
	export let title: string = '';
	export let type: 'button' | 'submit' = 'submit';
</script>

<button
	class="bg-yellow-dirty text-black-plain py-2 px-4"
	{title}
	{type}
	aria-label={ariaLabel}
	on:click={() => dispatch('click')}
>
	<p>{text}</p>
</button>
