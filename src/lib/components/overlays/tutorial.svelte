<script lang="ts">
	import { showTutorial } from '$lib/store/gameStore';
	import { fly } from 'svelte/transition';
</script>

{#if $showTutorial}
	<section transition:fly={{ duration: 350, y: 200 }} class="absolute inset-0 bg-white-soft">
		<article class="container py-block-page">
			<h1>Tutorial</h1>
			<button on:click={() => ($showTutorial = !$showTutorial)}>Hide Tutorial</button>
		</article>
	</section>
{/if}
