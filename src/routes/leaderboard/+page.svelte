<script lang="ts">
	import { goto } from '$app/navigation';
	import EconomyIconMask from '$lib/assets/category/economyIconMask.svelte';
	import EconomyIconPlain from '$lib/assets/category/economyIconPlain.svelte';
	import LeaderboardRank from '$lib/components/leaderboardRank.svelte';
	import LoadingSpinner from '$lib/components/loadingSpinner.svelte';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import { scenarios } from '$lib/data/scenarios';
	import { gameStore, scenarioStore, selectedOption } from '$lib/store/gameStore';
	import type { LeaderboardUsersProps, ServerAPIResponseProps } from '$lib/types/Types.js';
	import { initialScore, serverErrMessage } from '$lib/utils/generalVariables';
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let errorMsg: string;
	let rankedUsers: LeaderboardUsersProps[];
	let scoreCurrentUser: LeaderboardUsersProps | undefined;
	let rankCurrentUser: number | undefined;

	const fetchLeaderboardData = async () => {
		const response = await fetch(`/api/leaderboard`);
		const data: ServerAPIResponseProps = await response.json();

		if (data.status >= 400) return (errorMsg = data.message || serverErrMessage);
		const users: LeaderboardUsersProps[] = data.data;

		[rankedUsers, scoreCurrentUser, rankCurrentUser] = getRanking(users, $gameStore.userId);
	};

	const getRanking = (
		users: LeaderboardUsersProps[],
		userId: number | null
	): [LeaderboardUsersProps[], LeaderboardUsersProps | undefined, number | undefined] => {
		// Sort the array by score in descending order
		const rankedUsers = users.sort((a, b) => b.score - a.score);

		// Find the item with the specified id, if provided
		const rankCurrentUser = rankedUsers.findIndex((user) => user.id === userId) + 1;
		const scoreCurrentUser = users.find((user) => user.id === userId);

		return [rankedUsers.slice(0, 10), scoreCurrentUser, rankCurrentUser];
	};

	const resetGame = () => {
		$gameStore.isPlaying = false;
		$gameStore.currentScenario = null;
		$gameStore.userName = null;
		($gameStore.userId = null), ($gameStore.score.economy = initialScore);
		$gameStore.score.environment = initialScore;
		$gameStore.score.society = initialScore;
		$gameStore.score.health = initialScore;
		$gameStore.playedEvents = [];
		$gameStore.playedEvents = [];

		$scenarioStore = [...scenarios];
		$selectedOption = undefined;

		goto('/');
	};
	onMount(() => {
		if ($gameStore.isPlaying === false) return goto('/');
	});
</script>

<section class="container py-block-page">
	<h1 class="text-center">Auswertung</h1>
	{#await fetchLeaderboardData()}
		<LoadingSpinner isWhite={false} />
	{:then}
		<article in:slide={{ duration: 250, easing: sineIn }}>
			<div
				class="relative aspect-video bg-[url('/assets/leaderboard-card.png')] bg-cover bg-center bg-no-repeat rounded-card overflow-hidden p-6"
			>
				<div class="max-w-3/4">
					<h2 class="uppercase tracking-wide mb-2">{$gameStore.userName}</h2>
					<p class="text-[22px] font-lilita uppercase mb-4">Rang {rankCurrentUser}!</p>
					<p class="text-black-soft">Dein Score: {scoreCurrentUser?.score}</p>
				</div>
				<div class="absolute bottom-6 flex justify-between gap-x-4 mt-auto">
					<!-- <EconomyIconMask /> -->
				</div>
			</div>
		</article>

		<div class="my-10">
			{#each rankedUsers as user, index}
				<LeaderboardRank rank={index + 1} name={user.name} score={user.score} />
			{/each}
		</div>

		<div class="grid place-content-center">
			<PrimaryButton text="neues Spiel" on:click={resetGame} />
		</div>
	{/await}
</section>
