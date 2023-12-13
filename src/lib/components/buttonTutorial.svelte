<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let text: string;

	const dispatch = createEventDispatcher();
</script>

<button
	class="border-white-plain border-2 rounded-max py-3 px-6 text-white-plain"
	on:click={() => dispatch('click')}>{text}</button
>
