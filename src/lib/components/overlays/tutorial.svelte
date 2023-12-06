<script lang="ts">
	import { gameStore, showTutorial } from '$lib/store/gameStore';
	import { fly } from 'svelte/transition';
	import PrimaryButton from '../primaryButton.svelte';
	import { goto } from '$app/navigation';
</script>

{#if $showTutorial}
	<section transition:fly={{ duration: 350, y: -200 }} class="absolute inset-0 bg-white-soft">
		<article class="container py-block-page">
			<h1>Tutorial</h1>
			<h2>Hallo {$gameStore.userName}</h2>
			<PrimaryButton text="Hide Tutorial" type="button" on:click={() => ($showTutorial = false)} />
			<PrimaryButton
				text="Start Game"
				type="button"
				on:click={() => {
					goto('/scenario');
					$showTutorial = false;
				}}
			/>
		</article>
	</section>
{/if}
