<script lang="ts">
	import type { CategoryProps } from '$lib/types/Types';
	import { category100PercentValue } from '$lib/utils/generalVariables';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import EconomyIconMask from '$lib/assets/category/economyIconMask.svelte';
	import EnvironmentIconMask from '$lib/assets/category/environmentIconMask.svelte';
	import HealthIconMask from '$lib/assets/category/healthIconMask.svelte';
	import SocietyIconMask from '$lib/assets/category/societyIconMask.svelte';

	export let category: CategoryProps;
	export let currentScore: number;

	let elem: HTMLElement;
	let elemHeight = 0;

	const getIcon = () => {
		switch (category) {
			case 'economy':
				return EconomyIconMask;
			case 'environment':
				return EnvironmentIconMask;
			case 'society':
				return SocietyIconMask;
			case 'health':
				return HealthIconMask;
		}
	};

	// Create a tweened store for the height
	const animatedHeight = tweened(0, {
		duration: 500, // Adjust duration as needed
		easing: cubicOut // Adjust easing function as needed
	});

	onMount(() => {
		elemHeight = elem.clientHeight;
		// Initially set the height
		animatedHeight.set((currentScore / category100PercentValue) * elemHeight);
	});

	$: if (elemHeight > 0) {
		animatedHeight.set((currentScore / category100PercentValue) * elemHeight);
	}
</script>

<figure
	class="w-8 aspect-square bg-turqoise-light relative isolate overflow-hidden"
	bind:this={elem}
>
	<svelte:component this={getIcon()}></svelte:component>
	<span
		class="absolute left-0 right-0 bottom-0 bg-turqoise-dark -z-10 transition bar"
		style={`height: ${$animatedHeight}px`}
	>
	</span>
</figure>

<style>
	.bar {
		transition: height 0.5s ease-in-out;
	}
</style>
