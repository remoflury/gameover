<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
</script>

<section class="py-block-page">
	<article class="container">
		<h1>Ups, da lief etwas schief.</h1>
		<p>{$page.status} {$page.error?.message}</p>

		<div class="grid place-content-center mt-8">
			<PrimaryButton text="Zur Startseite" on:click={() => goto('/')} />
		</div>
	</article>
</section>
