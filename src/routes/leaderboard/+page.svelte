<script lang="ts">
	export let data;

	console.log(data);
</script>

{#each data.users as user}
	<ol>
		<li>
			{user.name}
			{user.score}
		</li>
	</ol>
{/each}
