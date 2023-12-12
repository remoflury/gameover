<script lang="ts">
	import { gameOverText } from '$lib/data/gameOverText';
	import type { ConsequenceProps } from '$lib/types/Types';

	export let type: keyof ConsequenceProps;
</script>

<article class="p-6 bg-orange-dirty rounded-card overflow-hidden">
	<h1 class="text-white-soft text-center">GameOver!</h1>
	<p class="text-white-soft text-center">
		{gameOverText[type]}
	</p>
</article>
