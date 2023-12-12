<script lang="ts">
	import EconomyIconPlain from '$lib/assets/category/economyIconPlain.svelte';
	import EnvironmentIconPlain from '$lib/assets/category/environmentIconPlain.svelte';
	import SocietyIconPlain from '$lib/assets/category/societyIconPlain.svelte';
	import HealthIconPlain from '$lib/assets/category/healthIconPlain.svelte';
	import ArrowIcon from '$lib/assets/arrowIcon.svelte';
	import type { CategoryProps } from '$lib/types/Types';
	import StrokePlain from '$lib/assets/strokePlain.svelte';

	export let type: CategoryProps;
	export let effect: number;

	const icon = () => {
		switch (type) {
			case 'economy':
				return EconomyIconPlain;
			case 'environment':
				return EnvironmentIconPlain;
			case 'society':
				return SocietyIconPlain;
			case 'health':
				return HealthIconPlain;
		}
	};
</script>

<div class="flex justify-start items-center gap-x-4">
	<figure class="w-8 aspect-video">
		<svelte:component this={icon()}></svelte:component>
	</figure>
	<div class="flex justify-between items-center gap-x-2">
		{#if effect === 0}
			<div class="w-3">
				<StrokePlain />
			</div>
		{:else}
			<div class="w-3 aspect-square" class:-rotate-90={effect >= 0} class:rotate-90={effect <= 0}>
				<ArrowIcon isBlack={true} />
			</div>
			<p>{Math.abs(effect)}</p>
		{/if}
	</div>
</div>
