<script lang="ts">
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { gameStore, showTutorial, scenarioStore } from '$lib/store/gameStore';
	let nameValue = '';

	const handleStartGame = () => {
		$showTutorial = true;
		$gameStore.userName = nameValue;
		$gameStore.isPlaying = true;
	};
</script>

<svelte:head><title>GameOver? | Start</title></svelte:head>

<section class="bg-gradient-turqoise-to-top min-h-screen py-block-page">
	<!-- mobile -->
	<article class="container lg:hidden">
		<figure class="max-w-1/2 mx-auto">
			<img src="/assets/gameover-logo-white.svg" alt="Logo von GameOver?" />
		</figure>
		<h1 hidden>GameOver?</h1>
		<p class="text-white-soft text-center mt-8">
			Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac
			tellus libero accumsan.
		</p>
		<PrimaryButton buttonProps={{ text: 'Start Game' }} on:click={handleStartGame} />
		<input type="name" placeholder="Name" bind:value={nameValue} />
	</article>

	<!-- desktop -->
	<article class="hidden lg:block container">
		<figure class="max-w-1/2 mx-auto">
			<img src="/assets/gameover-logo-white.svg" alt="Logo von GameOver?" />
		</figure>
		<h1>Bitte öffne diese Seite auf einem mobilen Gerät.</h1>
	</article>
</section>
