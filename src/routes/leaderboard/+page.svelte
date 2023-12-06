<script lang="ts">
	import type { LeaderboardUsersProps } from '$lib/types/Types.js';

	export let data;

	const users = data.users;

	const getLeaderboardResult = (users: LeaderboardUsersProps[]) => {
		// return {
		// 	place,
		// 	firstTen
		// }
	};
	console.log(data);
</script>

<section class="container py-block-page">
	{#each data.users as user}
		<ol>
			<li>
				{user.name}
				{user.score}
			</li>
		</ol>
	{/each}
</section>
