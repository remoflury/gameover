<script lang="ts">
	import GameScore from '$lib/components/gameScore.svelte';
	import EventCard from '$lib/components/overlays/eventCard.svelte';
</script>

<GameScore />
<slot />
<EventCard />
