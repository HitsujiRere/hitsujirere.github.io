<script lang="ts">
	import { StarRegular, StarSolid } from 'svelte-awesome-icons';

	export let name: string;
	export let icon: string;
	export let stars: number | undefined = undefined;
</script>

<div class="p-2 flex flex-col items-center border-2 rounded gap-1">
	<img src={icon} alt={name} class="w-10" />
	<span>{name}</span>
	{#if stars}
		<div class="flex justify-center">
			{#each [1, 2, 3, 4, 5] as star}
				{#if star <= stars}
					<StarSolid size="1rem" color="#FACC15" />
				{:else}
					<StarRegular size="1rem" color="#FACC15" />
				{/if}
			{/each}
		</div>
	{/if}
	<slot />
</div>
