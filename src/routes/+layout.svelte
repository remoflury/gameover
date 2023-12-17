<script>
	import '../css/main.css';
	import Tutorial from '$lib/components/overlays/tutorial.svelte';
	import { showTutorial } from '$lib/store/gameStore';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import HomeIcon from '$lib/assets/homeIcon.svelte';
	import OpenTutorialButton from '$lib/components/openTutorialButton.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { resetGame } from '$lib/utils/generalUtils';

	const options = {};
	let showModal = false;
	let scrollY = 0;
	afterNavigate(() => {
		if (browser) window.scrollTo(0, 0);
	});

	$: if (browser) document.body.classList.toggle('overflow-y-hidden', showModal);
</script>

<svelte:window bind:scrollY />

<main class="relative min-h-screen overflow-x-hidden">
	<slot />
	{#if $showTutorial}
		<Tutorial />
	{/if}
	{#if $page.url.pathname != '/'}
		<div class="container pb-block-page flex justify-between items-center gap-x-4">
			<button
				type="button"
				aria-label="Zur Startseite"
				class="w-6 h-6 rounded-max bg-white-soft p-1"
				on:click={() => (showModal = true)}
			>
				<HomeIcon />
			</button>
			<OpenTutorialButton />
		</div>
	{/if}

	{#if showModal}
		<div
			transition:fly={{ duration: 350, y: 200 }}
			class="absolute inset-0 bg-black-soft bg-opacity-75 p-8 z-[100]"
		>
			<div class="container grid place-content-center h-full relative">
				<article
					class="p-6 rounded-card bg-white-plain absolute left-0 right-0 top-1/2 translate-y-[calc(50vh_-_50%)]"
					style={`top: ${scrollY}px`}
				>
					<h2>Bist du sicher?</h2>
					<p>Willst du wirklich zum Startbildschirm zurückkehren?</p>
					<p>Dein ganzer Spielfortschritt geht verloren.</p>
					<div class="flex justify-between items-center gap-x-6 mt-6">
						<button
							on:click={() => {
								showModal = false;
								resetGame();
							}}>Ja</button
						>
						<button on:click={() => (showModal = false)}>Nein</button>
					</div>
				</article>
			</div>
		</div>
	{/if}
</main>
