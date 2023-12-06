<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';

	const options = {};
</script>

<main class="relative min-h-screen">
	<slot />
	<Tutorial />
</main>
