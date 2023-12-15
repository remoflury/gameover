<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import economyIconTutorial from '$lib/assets/category/economyIconTutorial.svg';
	import environmentIconTutorial from '$lib/assets/category/environmentIconTutorial.svg';
	import societyIconTutorial from '$lib/assets/category/societyIconTutorial.svg';
	import healthIconTutorial from '$lib/assets/category/healthIconTutorial.svg';
	import ButtonTutorial from '$lib/components/buttonTutorial.svelte';
	import { onMount } from 'svelte';
	import TutorialArrow from '$lib/assets/tutorialArrow.svelte';
	import ScenarioCard from '../scenarioCard.svelte';
	import { tutorialScenario } from '$lib/data/scenarios';
	import OptionCardWithoutFunction from '../optionCardWithoutFunction.svelte';
	import PrimaryButton from '../primaryButton.svelte';
	import ExplanationCard from '../explanationCard.svelte';
	import { showTutorial } from '$lib/store/gameStore';
	import { goto } from '$app/navigation';

	let step: number = 1;
	let gameScoreElem: HTMLElement;
	let gameScoreElemHeight: number;
	let scenarioCardElem: HTMLElement;
	let scenarioCardBottomPos: number;
	let optionCardElem: HTMLElement;
	let optionCardTopPos: number;

	const duration = 350;

	const nextStep = () => step++;

	onMount(() => {
		getVariables();
	});

	const getVariables = () => {
		gameScoreElemHeight = gameScoreElem?.clientHeight || 0;
		scenarioCardBottomPos = scenarioCardElem?.getBoundingClientRect().bottom || 0;
		optionCardTopPos = optionCardElem?.getBoundingClientRect().top || 0;
		console.log(scenarioCardBottomPos);
	};

	$: if (step) getVariables();

	$: console.log(optionCardTopPos);
</script>

<section transition:fly={{ duration: 350, y: -200 }} class="absolute inset-0 bg-white-plain">
	<article class="bg-opacity-75 h-full relative z-10">
		{#if step <= 4}
			<!-- Game Score, step 2 -->
			<div
				class="pb-block-page relative transition bg-black-plain bg-opacity-75"
				class:z-10={step === 2}
				class:-z-10={step !== 10}
				class:bg-white-plain={step === 2}
				bind:this={gameScoreElem}
			>
				<div class="flex gap-x-2 justify-evenly container pt-block-page">
					<img class="w-12" src={economyIconTutorial} alt="Design element" role="presentation" />
					<img
						class="w-12"
						src={environmentIconTutorial}
						alt="Design element"
						role="presentation"
					/>
					<img class="w-12" src={societyIconTutorial} alt="Design element" role="presentation" />
					<img class="w-12" src={healthIconTutorial} alt="Design element" role="presentation" />
				</div>
			</div>
			<!-- Scenardio Card, step 3 -->
			<div
				class="relative -z-10 transition container bg-black-plain bg-opacity-75"
				bind:this={scenarioCardElem}
			>
				<ScenarioCard
					description={tutorialScenario.description}
					isTutorial={step !== 3}
					img={tutorialScenario.image}
					title={tutorialScenario.title}
				/>
			</div>

			<!-- Scenario Options, step 4 -->
			<div
				class="relative transition container pt-4 bg-black-plain bg-opacity-75 pb-block-page"
				bind:this={optionCardElem}
			>
				<!-- class:bg-white-plain={step === 4} -->
				<OptionCardWithoutFunction
					text={tutorialScenario.option1.description}
					isDark={step !== 4}
				/>
				<OptionCardWithoutFunction
					text={tutorialScenario.option2.description}
					isDark={step !== 4}
				/>
				<div class="grid place-content-end mt-4">
					<PrimaryButton text="Weiter" isTutorial={step !== 4} />
				</div>
			</div>

			<div class="container absolute inset-0 z-50">
				{#if step === 1}
					<article in:fade={{ duration }} class="place-content-center grid redactor">
						<p class="tutorial">
							Willkommen zu "GameOver?"! Du bist der Weltpräsident, und deine Aufgabe ist es, die
							Welt durch kluge Entscheidungen nachhaltig zu entwickeln.
						</p>
						<p class="tutorial">
							Dein Ziel: Überlebe so viele Runden wie möglich und erziele einen hohen Endscore.
							Spiel klug, lerne aus Fehlern und sichere dir einen Platz an der Spitze von
							"GameOver?"!
						</p>
						<p class="tutorial">Viel Erfolg!</p>
						<div class="grid place-content-center mt-4">
							<ButtonTutorial text="Ok" on:click={nextStep} />
						</div>
					</article>
				{:else if step === 2}
					<article
						in:fade={{ duration }}
						class="relative"
						style={`margin-top: calc(${gameScoreElemHeight}px + 70px)`}
					>
						<div class="absolute left-0 top-0 -translate-y-full -z-10">
							<TutorialArrow delay={duration} {duration} />
						</div>
						<p class="tutorial">
							Hier siehst du deinen Punktestand der Kategorien Wirstschaft, Gesellschaft, Umwelt und
							Gesundheit. Ziel ist es, dass du in keiner Kategorie unter null fällst.
						</p>
						<div class="grid place-content-center mt-4">
							<ButtonTutorial text="Ok" on:click={nextStep} />
						</div>
					</article>
				{:else if step === 3}
					<article
						in:fade={{ duration }}
						class="absolute"
						style={`top: calc(${scenarioCardBottomPos}px + 70px)`}
					>
						<div class="absolute left-0 top-0 -translate-y-full -z-10">
							<TutorialArrow delay={duration} {duration} />
						</div>
						<p class="tutorial">
							Hier siehst du deinen Punktestand der Kategorien Wirstschaft, Gesellschaft, Umwelt und
							Gesundheit. Ziel ist es, dass du in keiner Kategorie unter null fällst.
						</p>
						<div class="grid place-content-center mt-4">
							<ButtonTutorial text="Ok" on:click={nextStep} />
						</div>
					</article>
				{:else if step === 4}
					<article
						in:fade={{ duration }}
						class="absolute"
						style={`top: calc(${optionCardTopPos}px - 200px)`}
					>
						<div class="absolute right-0 -bottom-8 -translate-y-full -z-10 -rotate-180">
							<TutorialArrow delay={duration} {duration} />
						</div>
						<p class="tutorial">
							hier kannst du dich für eine option entscheiden.
							<br />Klicke auf eine Option und klicke auf weiter.
						</p>
						<div class="grid place-content-center mt-4">
							<ButtonTutorial text="Ok" on:click={nextStep} />
						</div>
					</article>
				{/if}
			</div>
		{:else}
			<!-- Game Score, step 5 & 6 -->
			<div
				class="pb-block-page relative transition bg-black-plain bg-opacity-75"
				class:z-10={step === 6}
				class:-z-10={step !== 6}
				class:bg-white-plain={step === 6}
				bind:this={gameScoreElem}
			>
				<div class="flex gap-x-2 justify-evenly container pt-block-page">
					<img class="w-12" src={economyIconTutorial} alt="Design element" role="presentation" />
					<img
						class="w-12"
						src={environmentIconTutorial}
						alt="Design element"
						role="presentation"
					/>
					<img class="w-12" src={societyIconTutorial} alt="Design element" role="presentation" />
					<img class="w-12" src={healthIconTutorial} alt="Design element" role="presentation" />
				</div>
			</div>

			<div class="container bg-black-plain bg-opacity-75 min-h-screen">
				<ExplanationCard
					explanation={tutorialScenario.option1.explanation}
					economy={tutorialScenario.option1.consequences.economy}
					environment={tutorialScenario.option1.consequences.environment}
					society={tutorialScenario.option1.consequences.society}
					health={tutorialScenario.option1.consequences.health}
					isTutorial={true}
				/>
			</div>
			<div class="container absolute inset-0 z-50">
				{#if step === 5}
					<article in:fade={{ duration }} class="absolute inset-0 grid place-content-center">
						<p class="tutorial">Hier erfährst du welche auswirkungen deine entscheidung hat.</p>
						<div class="grid place-content-center mt-4">
							<ButtonTutorial text="Ok" on:click={nextStep} />
						</div>
					</article>
				{:else if step === 6}
					<article
						in:fade={{ duration }}
						class="relative"
						style={`margin-top: calc(${gameScoreElemHeight}px + 70px)`}
					>
						<div class="absolute left-0 top-0 -translate-y-full -z-10">
							<TutorialArrow delay={duration} {duration} />
						</div>
						<p class="tutorial">Dein Punktestand aktualisiert sich dementsprechend</p>
						<div class="grid place-content-center mt-4">
							<PrimaryButton
								text="Spiel starten"
								type="button"
								on:click={() => {
									$showTutorial = false;
									step = 1;
									goto('/scenario');
								}}
							/>
						</div>
					</article>
				{/if}
			</div>
		{/if}
	</article>
</section>

<style lang="postcss">
	.bg-greyed-out {
		@apply bg-black-plain bg-opacity-75;
	}
</style>
