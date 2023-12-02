<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';
	import { gameStore } from '$lib/store/gameStore';

	// $: console.log($gameStore.score);
</script>

<main class="relative min-h-screen">
	<slot />
	<Tutorial />
</main>
