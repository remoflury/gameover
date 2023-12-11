<script lang="ts">
	import { goto } from '$app/navigation';
	import { gameStore } from '$lib/store/gameStore';
	import type { LeaderboardUsersProps, ServerAPIResponseProps } from '$lib/types/Types.js';
	import { serverErrMessage } from '$lib/utils/generalVariables';
	import { onMount } from 'svelte';

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

	onMount(() => {
		if ($gameStore.isPlaying === false) return goto('/');
	});
</script>

<section class="container py-block-page">
	{#await fetchLeaderboardData()}
		<p>await</p>
	{:then}
		<p>{rankCurrentUser}. Dein Score {scoreCurrentUser?.score}</p>
		{#each rankedUsers as user, index}
			<p>{index + 1}. {user.name} {user.score}</p>
		{/each}
	{/await}
</section>
