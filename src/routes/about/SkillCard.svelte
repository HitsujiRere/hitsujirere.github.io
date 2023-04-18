<script lang="ts">
	import { StarRegular, StarSolid } from 'svelte-awesome-icons';

	export let name: string;
	export let icon: string | undefined = undefined;
	export let stars: number | undefined = undefined;
</script>

<div class="p-2 flex flex-col justify-center items-center border-2 rounded gap-1">
	{#if icon}
		<img src={icon} alt={name} class="h-10" />
	{/if}
	<slot name="icon" />
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
