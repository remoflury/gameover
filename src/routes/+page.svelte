<script lang="ts">
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { ToastContainer, FlatToast } from 'svelte-toasts';
	import { gameStore, showTutorial } from '$lib/store/gameStore';
	import { showToast } from '$lib/utils/generalUtils';
	import { applyAction, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import LoadingSpinner from '$lib/components/loadingSpinner.svelte';
	import Link from '$lib/components/link.svelte';

	type ExtendedActionResult = ActionResult & {
		data: {
			id: number;
			name: string;
		};
	};
	let nameValue = '';
	let isLoading = false;

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

<section
	class=" min-h-screen py-block-page bg-[url('/assets/start-image.png')] bg-no-repeat bg-cover relative bg-center lg:bg-top"
>
	<!-- mobile -->
	<article class="container lg:hidden">
		<h1 hidden>GameOver?</h1>
		<figure class="max-w-3/4 w-full mx-auto">
			<img
				class="object-contain w-full"
				src="/assets/gameover-logo-white.svg"
				alt="Logo des Spiels GameOver?"
			/>
		</figure>
		<div
			class="max-w-3/4 w-full mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 pb-block-page flex flex-col gap-y-4 items-center"
		>
			<form
				class="flex flex-col gap-y-4 items-center"
				action="?/startgame"
				method="post"
				use:enhance={() => {
					isLoading = true;
					return async ({ result }) => handleAction(result);
				}}
			>
				<input type="name" name="name" placeholder="Name" bind:value={nameValue} />
				{#if !isLoading}
					<PrimaryButton text="Spiel starten" />
				{:else}
					<LoadingSpinner />
				{/if}
			</form>

			<div class="flex justify-between items-center gap-x-4 w-full mt-2">
				<Link href="/sources" text="Quellen" />
				<Link href="/about" text="Über GameOver?" isTextAlignedRight={true} />
			</div>
		</div>
	</article>

	<ToastContainer placement="bottom-right" let:data>
		<FlatToast {data} />
	</ToastContainer>

	<!-- desktop -->
	<article class="hidden lg:block container">
		<figure class="max-w-1/4 mx-auto">
			<img src="/assets/gameover-logo-white.svg" alt="Logo von GameOver?" />
		</figure>
		<h1 class="text-white-soft text-center mt-20">
			Bitte öffne diese Seite auf einem mobilen Gerät.
		</h1>
	</article>
</section>
