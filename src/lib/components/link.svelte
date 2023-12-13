<script lang="ts">
	export let href: string;
	export let text: string;
	export let target: '' | '_blank' = '';
	export let isTextAlignedRight = false;
</script>

<a {href} {target} class="text-white-soft uppercase font-bold" class:text-right={isTextAlignedRight}
	>{text}</a
>
