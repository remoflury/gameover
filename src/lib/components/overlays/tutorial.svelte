<script lang="ts">
	import { gameStore, showTutorial } from '$lib/store/gameStore';
	import { fly } from 'svelte/transition';
	import PrimaryButton from '../primaryButton.svelte';
	import { goto } from '$app/navigation';
	import SingleImage from '../singleImage.svelte';
</script>

{#if $showTutorial}
	<section transition:fly={{ duration: 350, y: -200 }} class="absolute inset-0 bg-gray">
		<article class="container py-block-page">
			<h1>Tutorial</h1>
			<p class="mb-6">
				Willkommen zu "GameOver?"! Du bist der Weltpräsident, und deine Aufgabe ist es, die Welt
				durch kluge Entscheidungen nachhaltig zu entwickeln. Dein Ziel: Überlebe so viele Runden wie
				möglich und erziele einen hohen Endscore. Entscheide dich in Szenarien mit zwei Optionen,
				bedenke die Auswirkungen auf Umwelt, Gesellschaft, Gesundheit und Wirtschaft. Halte ein
				Gleichgewicht in den Kategorien und vermeide, dass eine auf null fällt. Spiel klug, lerne
				aus Fehlern und sichere dir einen Platz an der Spitze von "GameOver?"! Viel Erfolg!
			</p>

			<SingleImage src="/assets/tutorial.jpg" alt="Eine Weltkugel in illustrativem Stil." />
			<div class="mt-6 grid place-content-center">
				<PrimaryButton
					text="Spiel starten"
					type="button"
					on:click={() => {
						goto('/scenario');
						$showTutorial = false;
					}}
				/>
			</div>
		</article>
	</section>
{/if}
