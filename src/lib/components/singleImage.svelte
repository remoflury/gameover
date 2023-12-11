<script lang="ts">
	export let src: string;
	export let alt: string = '';
</script>

<figure class="aspect-4/3 overflow-hidden rounded-card">
	<img class="object-cover object-center w-full h-full" {src} {alt} />
</figure>
