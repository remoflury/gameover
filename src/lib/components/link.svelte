<script lang="ts">
	export let href: string;
	export let text: string;
	export let target: '' | '_blank' = '';
</script>

<a {href} {target} class="text-white-soft uppercase font-bold">{text}</a>
