<script lang="ts">
	import { currentEvent, eventsStore, showEvent } from '$lib/store/gameStore';
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import EffectCategory from '../categories/effectCategory.svelte';
	import PrimaryButton from '../primaryButton.svelte';
	import { isGameOver, showToast, updateGameStore } from '$lib/utils/generalUtils';
	import { goto } from '$app/navigation';

	let scrollY: number;

	const closeEvent = (economy: number, environment: number, society: number, health: number) => {
		$showEvent = false;
		// toggleOverflowHidden();
		removeCurrentEvent($currentEvent.index);
		setTimeout(() => {
			updateGameStore(economy, environment, society, health);
			if (isGameOver()) return goto('/game-over');
		}, 1000);
	};

	const removeCurrentEvent = (index: number | null) => {
		if (index === null) return showToast('Error', 'No event index provided.', 'error');
		const realIndex = $eventsStore.findIndex((event) => event.id == index);
		$eventsStore.splice(realIndex, 1);
		$eventsStore = [...$eventsStore];
	};
</script>

<svelte:window bind:scrollY />

{#if $showEvent && $currentEvent.event}
	{@const event = $currentEvent.event}
	<div
		transition:fly={{ duration: 250, easing: sineInOut, y: 200 }}
		class="absolute bg-black-plain bg-opacity-75 min-h-screen left-0 right-0 z-50"
		style={`top: ${scrollY}px`}
	>
		<article class=" flex flex-col justify-end min-h-screen">
			<figure class="aspect-4/3 overflow-hidden max-w-full rounded-t-card">
				<img
					class="object-cover object-center w-full h-full"
					src={`/assets/scenario/${event?.image}`}
					alt="Design Element"
					role="presentation"
				/>
			</figure>
			<div class="container bg-white-soft">
				<h1 class="mt-6">{event.title}</h1>
				<p>{event.description}</p>
				<div class="my-8 grid grid-cols-2 gap-8 px-6">
					<EffectCategory type="economy" effect={event.consequences.economy} />
					<EffectCategory type="environment" effect={event.consequences.environment} />
					<EffectCategory type="society" effect={event.consequences.society} />
					<EffectCategory type="health" effect={event.consequences.health} />
				</div>

				<div class="grid place-content-center mb-8">
					<PrimaryButton
						text="Ok"
						on:click={() =>
							closeEvent(
								event.consequences.economy,
								event.consequences.environment,
								event.consequences.society,
								event.consequences.health
							)}
					/>
				</div>
			</div>
		</article>
	</div>
	<button on:click={() => ($showEvent = false)}>Hide event</button>
{/if}
