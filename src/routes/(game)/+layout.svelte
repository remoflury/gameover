<script lang="ts">
	import { browser } from '$app/environment';
	import GameScore from '$lib/components/gameScore.svelte';
	import EventCard from '$lib/components/overlays/eventCard.svelte';

	import { showEvent } from '$lib/store/gameStore';

	$: if (browser) document.body.classList.toggle('overflow-y-hidden', $showEvent);
</script>

<GameScore />
<slot />
<EventCard />
