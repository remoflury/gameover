<script>
	import { showTutorial } from '$lib/store/gameStore';
</script>

<div class="grid place-content-start">
	<button
		aria-label="tutorial öffnen"
		class="bg-white-soft rounded-max p-1 w-6 h-6 aspect-square grid place-content-center"
		on:click={() => {
			$showTutorial = true;
			window.scrollTo(0, 0);
		}}
	>
		<p class="font-lilita text-beige">?</p>
	</button>
</div>
