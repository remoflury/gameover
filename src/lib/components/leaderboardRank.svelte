<script lang="ts">
	export let rank: number;
	export let name: string;
	export let score: number;
</script>

<div class="border-t border-white-soft grid grid-cols-10 gap-x-2 last:border-b py-[6px]">
	<p class="text-[22px] font-lilita uppercase col-span-2">{rank}.</p>
	<p class="col-span-6">{name}</p>
	<p class="text-[22px] font-lilita uppercase col-span-2 text-right">{score} PT.</p>
</div>
