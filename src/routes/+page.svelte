<script lang="ts">
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { ToastContainer, FlatToast } from 'svelte-toasts';
	import { gameStore, showTutorial } from '$lib/store/gameStore';
	import { showToast } from '$lib/utils/generalUtils';
	import { applyAction, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import LoadingSpinner from '$lib/components/loadingSpinner.svelte';

	type ExtendedActionResult = ActionResult & {
		data: {
			id: number;
			name: string;
		};
	};
	let nameValue = '';
	let isLoading = true;

	function isExtendedActionResult(result: ActionResult): result is ExtendedActionResult {
		return (
			'data' in result &&
			typeof result.data === 'object' &&
			'id' in result.data &&
			'name' in result.data
		);
	}

	const handleAction = async (result: ActionResult) => {
		if (result.status == 406) {
			isLoading = false;
			return showToast('Fehlender Name', 'Bitte gib einen Namen an', 'error');
		}

		if (result.status == 500) {
			isLoading = false;
			return showToast('Fehlender Name', 'Ups, da lief etwas schief.', 'error');
		}
		if (isExtendedActionResult(result)) {
			handleStartGame(result);
		}
		isLoading = false;
		await applyAction(result);
	};
	const handleStartGame = (result: ExtendedActionResult) => {
		$gameStore.userName = result.data.name;
		$gameStore.userId = result.data.id;
		$gameStore.isPlaying = true;

		$showTutorial = true;
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
		<form
			action="?/startgame"
			method="post"
			use:enhance={() => {
				isLoading = true;
				return async ({ result }) => handleAction(result);
			}}
		>
			<input type="name" name="name" placeholder="Name" bind:value={nameValue} />
			{#if !isLoading}
				<PrimaryButton text="Start Game" />
			{:else}
				<LoadingSpinner />
			{/if}
		</form>
	</article>

	<ToastContainer placement="bottom-right" let:data>
		<FlatToast {data} />
	</ToastContainer>

	<!-- desktop -->
	<article class="hidden lg:block container">
		<figure class="max-w-1/2 mx-auto">
			<img src="/assets/gameover-logo-white.svg" alt="Logo von GameOver?" />
		</figure>
		<h1>Bitte öffne diese Seite auf einem mobilen Gerät.</h1>
	</article>
</section>
