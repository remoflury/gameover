<script lang="ts">
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/primaryButton.svelte';
</script>

<section class="container py-block-page">
	<article class="redactor">
		<h1>Über GameOver?</h1>
		<p>
			GameOver? entstand im Rahmen des Moduls Visualisieren V am <a
				href="https://www.fhgr.ch/fh-graubuenden/angewandte-zukunftstechnologien/institut-fuer-multimedia-production-imp/"
				target="_blank"
				class="underline underline-2"
				>Institut für Multimedia Production (MP) an der Fachhochschule Graubünden</a
			>. Die Aufgabe bestand darin, ein Serious Game zum Thema der
			<a href="https://sdgs.un.org/goals" target="_blank" class="link"
				>Sustainable Development Goals (SDG)</a
			> zu entwickeln.
		</p>
		<p>
			Riona, Viviane und Remo nahmen es sich zum Ziel, die Komplexität der Nachhaltigkeit in ein
			Spiel zu packen. Entscheidungen sind multifaktoriell und haben Einfluss auf mehrere Aspekte
			der Nachhaltigkeit. Dieses Zusammenspiel und die Komplexität solcher Entscheidungen wollen sie
			mit dem Spiel “GameOver?” aufgezeigen.
		</p>
		<div class="grid place-content-center mt-8">
			<PrimaryButton text="Zum Spiel" on:click={() => goto('/')} />
		</div>
	</article>
</section>
