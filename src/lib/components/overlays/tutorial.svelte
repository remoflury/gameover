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
			<PrimaryButton
				buttonProps={{ text: 'Hide Tutorial' }}
				on:click={() => ($showTutorial = false)}
			/>
			<PrimaryButton
				buttonProps={{ text: 'Start Game' }}
				on:click={() => {
					goto('/scenario');
					$showTutorial = false;
				}}
			/>
		</article>
	</section>
{/if}
