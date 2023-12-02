<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';
	import { gameStore } from '$lib/store/gameStore';

	$: console.log('current index ', $gameStore.currentScenario);
</script>

<main class="relative min-h-screen">
	<slot />
	<Tutorial />
</main>
