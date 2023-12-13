<script lang="ts">
	export let isBlack = false;
</script>

<svg class="max-w-full fill-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<path
		class="stroke-2"
		class:stroke-white-soft={!isBlack}
		class:stroke-black-soft={isBlack}
		d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		class="stroke-2"
		class:stroke-white-soft={!isBlack}
		class:stroke-black-soft={isBlack}
		d="M14.7499 8L1.25 8"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
