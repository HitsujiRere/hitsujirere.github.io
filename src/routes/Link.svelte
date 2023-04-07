<script lang="ts">
	import { page } from '$app/stores';

	export let to: string;
</script>

{#if $page.route.id?.startsWith(to)}
	<span class="text-xl font-bold">-</span>
{/if}
<a href={to} class="px-2 text-xl font-bold hover:underline underline-offset-8">
	<slot />
</a>
