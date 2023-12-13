<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';
	import { showTutorial } from '$lib/store/gameStore';

	const options = {};
</script>

<main class="relative min-h-screen">
	<slot />
	{#if $showTutorial}
		<Tutorial />
	{/if}
</main>
