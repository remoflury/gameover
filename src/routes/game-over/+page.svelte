<script lang="ts">
	import { goto } from '$app/navigation';
	import GameOverCard from '$lib/components/gameOverCard.svelte';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { gameStore } from '$lib/store/gameStore';
	import type { ConsequenceProps, ServerAPIResponseProps } from '$lib/types/Types';
	import { getTotalScore } from '$lib/utils/generalUtils';
	import { onMount } from 'svelte';

	let totalScore: number;

	const writeResultToDB = async () => {
		totalScore = getTotalScore($gameStore.playedScenarios.length);
		const response = await fetch(`/api/gameover?score=${totalScore}&userid=${$gameStore.userId}`);
		const data: ServerAPIResponseProps = await response.json();

		if (data.status >= 400) console.error(data.message);
	};

	function getKeyWithLowestValue(consequenceProps: ConsequenceProps): keyof ConsequenceProps {
		let minKey: keyof ConsequenceProps | null = null;
		let minValue = Number.MAX_VALUE;

		for (const [key, value] of Object.entries(consequenceProps)) {
			if (value < minValue) {
				minValue = value;
				minKey = key as keyof ConsequenceProps;
			}
		}

		if (minKey === null) {
			throw new Error('No keys found in ConsequenceProps');
		}

		return minKey;
	}

	const getImgPathForGameOverScreen = (lowestKey: keyof ConsequenceProps): string => {
		switch (lowestKey) {
			case 'economy':
				return '/assets/gameoverEconomy.jpg';
			case 'environment':
				return '/assets/gameoverEnvironment.jpg';
			case 'society':
				return '/assets/gameoverSociety.jpg';
			case 'health':
				return '/assets/gameoverHealth.jpg';
		}
	};

	const lowestKey = getKeyWithLowestValue($gameStore.score);
	const src = getImgPathForGameOverScreen(lowestKey);

	onMount(async () => {
		if ($gameStore.isPlaying === false) return goto('/');
		await writeResultToDB();
	});
</script>

<figure class="aspect-4/3 overflow-hidden">
	<img class="object-cover object-center w-full h-full" {src} alt="Game Over Bild" />
</figure>
<section class="py-block-page container">
	<article class="">
		<GameOverCard type={lowestKey} />
		<div class="flex justify-end mt-4">
			<PrimaryButton text="zum Leaderboard" on:click={() => goto('/leaderboard')} />
		</div>
	</article>
</section>
