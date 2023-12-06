<script>
	import '../css/main.css';
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';

	let path = $page.url.pathname;
	afterNavigate(() => {
		path = $page.url.pathname;
	});

	const options = {};
</script>

{#key path}
	<main in:fly={{ duration: 200, easing: cubicIn }} class="relative min-h-screen">
		<slot />
		<Tutorial />
	</main>
{/key}
