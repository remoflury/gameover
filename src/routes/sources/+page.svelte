<script lang="ts">
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
	import SourceLink from '$lib/components/sourceLink.svelte';
	import { sources } from '$lib/data/sources';
</script>

<section class="container py-block-page">
	<article>
		<h1>Quellen</h1>
		<p>
			Die Szenarien von GameOver? basieren auf Quellen. Du kannst dich gerne für jedes Szenario in
			die entsprechenden Quellen einlesen:
		</p>

		{#each sources as source}
			<h2 class="mt-8">{source.scenario}</h2>
			{#each source.sources as link}
				<SourceLink source={link} />
			{/each}
		{/each}
		<div class="grid place-content-center mt-8">
			<PrimaryButton text="zum Spiel" on:click={() => goto('/')} />
		</div>
	</article>
</section>
