<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';
	import { showTutorial } from '$lib/store/gameStore';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	const options = {};

	afterNavigate(() => {
		if (browser) window.scrollTo(0, 0);
	});
</script>

<main class="relative min-h-screen overflow-x-hidden">
	<slot />
	{#if $showTutorial}
		<Tutorial />
	{/if}
</main>
