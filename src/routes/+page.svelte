<script lang="ts">
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { showTutorial } from '$lib/store/gameStore';
</script>

<svelte:head><title>GameOver? | Start</title></svelte:head>

<section class="bg-gradient-turqoise-to-top min-h-screen py-block-page">
	<article class="container">
		<figure class="max-w-1/2 mx-auto">
			<img src="/assets/gameover-logo-white.svg" alt="Logo von GameOver?" />
		</figure>
		<p class="text-white-soft text-center mt-8">
			Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac
			tellus libero accumsan.
		</p>
		<PrimaryButton
			buttonProps={{ text: 'Start Game' }}
			on:click={() => ($showTutorial = !$showTutorial)}
		/>
		<input type="name" placeholder="Name" />
	</article>
</section>
