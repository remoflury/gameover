<script lang="ts">
	export let text: string;
	export let isDark = false;
</script>

<button
	aria-label="Szenario auswählen"
	class="transition p-6 border border-transparent rounded-card outline-none outline-offset-0 mt-4 first:mt-0"
	class:bg-white-soft={!isDark}
	class:bg-black-plain={isDark}
	class:bg-opacity-10={isDark}
>
	<p class="text-left">{text}</p>
</button>
